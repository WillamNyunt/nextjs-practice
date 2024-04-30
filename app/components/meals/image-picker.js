'use client';

import classes from './image-picker.module.css'
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
    const [selectedImage, setSelectedImage] = useState();
    const inputRef = useRef();
    function handlePickClick() {
        inputRef.current.click();
    }



    function handleImageChange() {
        const file = inputRef.current.files[0];

        if (!file) {
            setSelectedImage(null);
            return;
        }

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {selectedImage && <Image src={selectedImage} alt="image selected by the user" fill />}
                    {!selectedImage && <p>No image picked yet.</p>}
                </div>
                <input ref={inputRef} className={classes.input} id={name} name={name} type="file" accept="image/png, image/jpeg" onChange={handleImageChange} required />
                <button className={classes.button} type="button" onClick={handlePickClick}>Pick an Image</button>
            </div>

        </div>
    )
}
