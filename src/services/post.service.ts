import {PostItems} from "../types/types.ts";

export const getPosts = {
	URL: 'http://localhost:3000/',

	async fetchPosts(): Promise<PostItems[]> {
		const res = await fetch(`${this.URL}posts`)
		return await res.json()
	}
}
