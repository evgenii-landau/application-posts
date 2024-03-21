import {createContext, FC, ReactNode, useEffect, useState} from "react";
import {PostItems} from "../types/types.ts";
import {getPosts} from "../services/post.service.ts";
import {setPostService} from "../services/setPost.service.ts";
import {deletePostService} from "../services/deletePost.service.ts";

interface PostContext {
	posts: PostItems[],
	inputValue: {title: string, body: string},
	setPost: React.Dispatch<React.SetStateAction<PostItems[]>> // наведи на setPost
	setInput:  React.Dispatch<React.SetStateAction<{title: string, body: string}>>, // наведи на setInput
	addNewPost: () => void;
	deletePost: (id: string) => void;
	children: ReactNode;
}

export const PostContext = createContext<PostContext>({
	posts: [],
	inputValue: {title: '', body: ''},
	setPost: () => {},
	setInput: () => {},
	addNewPost: () => {},
	deletePost: () => {},
	children: null,
})


export const PostProvider: FC<PostContext> = ({children}) => {
	const [posts, setPost] = useState<PostItems[]>([])
	const [inputValue, setInput] = useState<{title: string, body: string}>({title: '', body: ''})


	useEffect(() => {
		async function getAllPosts() {
			const data = await getPosts.fetchPosts()
			setPost(data)
		}

		getAllPosts()
	}, [posts]);

	const addNewPost = async () => {
		const lastId = (posts.length + 1).toString()
		const data = await setPostService.fetchSetPost(inputValue, lastId)
		setPost(prev => [...prev, data])
		setInput({title: '', body: ''})
	}

	const deletePost = async (id: string) => {
		await deletePostService.fetchDeletePost(id)
	}

	const contextValue: PostContext = {
		posts,
		inputValue,
		setPost,
		setInput,
		addNewPost,
		deletePost,
		children
	}

	return <PostContext.Provider value={contextValue}>
		{children}
	</PostContext.Provider>
}