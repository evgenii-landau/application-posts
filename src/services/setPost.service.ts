import {PostItems} from "../types/types.ts";

export const setPostService = {
	URL: 'http://localhost:3000/',

	async fetchSetPost(title, desc, id): Promise<PostItems[]> {
		const res = await fetch(`${this.URL}posts`, {
			method: 'POST',
			body: JSON.stringify({
				id,
				title,
				body: desc
			})
		})
		return await res.json()
	}
}