import {readFile, readdir} from "node:fs/promises";
import matter from "gray-matter";
import {marked} from "marked";
import * as qs from 'qs';

const BACKEND_URL = 'http://127.0.0.1:1337';

export async function getFeaturedReview() {
    const reviews = await getReviews();
    return reviews[0];
}

export async function getReviewOld(slug) {
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
    const {content, data: {title, date, imageUrl}} = matter(text);
    const html = marked(content);
    return {slug, title, date, imageUrl, html};
}

export async function getReview(slug) {
    const {data} = await fetchReviews({
        filters: {slug: {$eq: slug}},
        fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
        populate: {image: {fields: ['url']}},
        pagination: {pageSize: 1, withCount: false}
    });
    const item = data[0];
    return {
        ...mapper(item),
        html: marked(item.attributes.body)
    };
}


export async function getReviewsOld() {
    const slugs = await getSlugs();
    const reviews = [];
    for (const slug of slugs) {
        reviews.push(await getReview(slug))
    }
    reviews.sort((r1, r2) => r2.date.localeCompare(r1.date));
    return reviews;
}

export async function getReviews() {
    const {data} = await fetchReviews({
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
        populate: {image: {fields: ['url']}},
        pagination: {pageSize: 6},
        sort: ['publishedAt:desc']
    });
    const reviews = data.map(mapper);
    return reviews;
}

export async function getSlugsOld() {
    const files = await readdir('./content/reviews');
    return files.filter(f => f.endsWith('.md'))
        .map(f => f.slice(0, -'.md'.length));
};

export async function getSlugs() {
    const {data} = await fetchReviews({
        fields: ['slug'],
        sort: ['publishedAt:desc'],
        pagination: {pageSize: 100}
    })
    return data.map(item => item.attributes.slug);
};

async function fetchReviews(params) {
    const url = `${BACKEND_URL}/api/reviews?` +
        qs.stringify(params, {encodeValuesOnly: true});
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Strapi backend returned ${response.status} for ${url}`);
    }
    return await response.json();
}

function mapper(item) {
    const {attributes} = item;
    return {
        slug: attributes.slug,
        title: attributes.title,
        date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
        imageUrl: `${BACKEND_URL}${attributes.image.data.attributes.url}`
    }
}