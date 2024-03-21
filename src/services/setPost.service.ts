export const setPostService = {
	URL: 'http://localhost:3000/',

	async fetchSetPost(inputValue: {title: string, body: string}, id: string) {
		id = id.toString()

		try {
			const res = await fetch(`${this.URL}posts`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					id,
					title: inputValue.title,
					body: inputValue.body
				})
			})
			return await res.json()
		} catch (error) {
			console.error(error)
		}
	}
}