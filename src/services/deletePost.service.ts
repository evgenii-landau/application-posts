export const deletePostService = {
	URL: 'http://localhost:3000/',

	async fetchDeletePost(id) {
		const res = await fetch(`${this.URL}posts/${id}`, {
			method: 'DELETE'
		})
		return await res.json()
	}
}