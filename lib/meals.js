import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  //for images
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferImage), (error) => {
    if (error) {
      console.error("Failed to save image", error);
    }
    stream.close();
  });

  meal.image = `/images/${fileName}`;
  console.log(meal)
  db.prepare(`INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (
                @title, 
                @summary, 
                @instructions, 
                @image, 
                @creator, 
                @creator_email, 
                @slug)
        `
  ).run(meal);  
}
