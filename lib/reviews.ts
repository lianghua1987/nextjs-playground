import {readFile} from "node:fs/promises";
import matter from "gray-matter";
import {marked} from "marked";

export async function getReview(slug){
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
    const {content, data: {title, date, imageUrl}} = matter(text);
    const html = marked(content);
    return {title, date, imageUrl, html};
}