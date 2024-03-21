export const deletePostService = {
	URL: 'http://localhost:3000/',

	async fetchDeletePost(id: string | undefined) {
		await fetch(`${this.URL}posts/${id}`, {
			method: 'DELETE'
		})
	}
}