import * as prismic from "@prismicio/client";

const endpoint = prismic.getEndpoint("blogluizeduardo");
export const client = prismic.createClient(endpoint);
