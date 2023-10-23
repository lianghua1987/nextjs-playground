import {writeFileSync} from "fs";
import * as qs from 'qs'

let url = 'http://127.0.0.1:1337/api/reviews?' +
    qs.stringify({
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
        populate: {
            image: {
                fields: ['url']
            }
        },
        pagination: {pageSize: 6},
        sort: ['publishedAt:desc']
    }, {encodeValuesOnly: true});
console.log(url);
let response = await fetch(url);
let body = await response.json()
let result = JSON.stringify(body, null, 2);
writeFileSync('./scripts/stapi-reviews-response.json', result, 'utf-8');


url = 'http://127.0.0.1:1337/api/reviews?' +
    qs.stringify({
        filters: {slug: {$eq: 'hades-2018'}},
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
        populate: {
            image: {
                fields: ['url']
            }
        },
        pagination: {pageSize: 1, withCount: false},
    }, {encodeValuesOnly: true});
console.log(url);
response = await fetch(url);
body = await response.json()
result = JSON.stringify(body, null, 2);
writeFileSync('./scripts/stapi-review-response.json', result, 'utf-8');