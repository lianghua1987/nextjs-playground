import {readFile, readdir} from "node:fs/promises";
import matter from "gray-matter";
import {marked} from "marked";

export async function getReview(slug) {
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
    const {content, data: {title, date, imageUrl}} = matter(text);
    const html = marked(content);
    return {slug, title, date, imageUrl, html};
}

export async function getReviews() {
    const slugs = await getSlugs();
    const reviews = [];
    for (const slug of slugs) {
        reviews.push(await getReview(slug))
    }
    return reviews;
}

export async function getSlugs() {
    const files = await readdir('./content/reviews');
    return files.filter(f => f.endsWith('.md'))
        .map(f => f.slice(0, -'.md'.length));
}