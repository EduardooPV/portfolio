import * as prismic from "@prismicio/client";

const endpoint = prismic.getEndpoint(process.env.ENDPOINT_PRISMIC);
export const client = prismic.createClient(endpoint);
