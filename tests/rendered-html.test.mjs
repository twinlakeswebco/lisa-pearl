import test from "node:test";
import assert from "node:assert/strict";
const origin=process.env.TEST_URL || "http://127.0.0.1:3000";
for(const path of ["/","/about","/contact","/donate"]){test(`${path} renders campaign content`,async()=>{const res=await fetch(origin+path);const html=await res.text();assert.equal(res.status,200);assert.match(html,/Lisa Pearl/);assert.ok(html.includes('THIS WEBSITE IS PROPERTY OF TWIN LAKES WEB CO. - PREVIEW ONLY'));assert.doesNotMatch(html,/PTO|Redhawk|BAND|27-0908487|clarksonpto/i);assert.match(html,/noindex/);for(const route of ["/about","/contact","/donate"])assert.ok(html.includes(`href="${route}"`));});}
test('donate uses email without collecting payments',async()=>{const html=await(await fetch(origin+'/donate')).text();assert.ok(html.includes('mailto:ljproark@aol.com?subject=Campaign%20contribution%20information'));assert.doesNotMatch(html,/<form/)});
test('member area is retired',async()=>{const res=await fetch(origin+'/members');assert.equal(res.status,404);assert.match(await res.text(),/back home/)});
