export default function BlogPostPage({params}) {
    const { slug } = params;
    return (
        <main>
            <h1>Post 1</h1>
            <p>Here is some content for post 1.</p>
            <p>Slug: {slug}</p>
        </main>
    );
}