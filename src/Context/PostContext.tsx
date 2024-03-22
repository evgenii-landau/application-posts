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
	selectedCategory: string;
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export const PostContext = createContext<PostContext>({
	posts: [],
	inputValue: {title: '', body: ''},
	setPost: () => {},
	setInput: () => {},
	addNewPost: () => {},
	deletePost: () => {},
	children: null,
	selectedCategory: '',
	setSelectedCategory: () => {},
})

export const sortCategroy: {value: string, name: string}[] = [{value: 'title', name: 'По названию'}, {value: 'body', name: 'По описанию'}]

export const PostProvider: FC<PostContext> = ({children}) => {
	const [posts, setPost] = useState<PostItems[]>([])
	const [inputValue, setInput] = useState<{title: string, body: string}>({title: '', body: ''})
	const [selectedCategory, setSelectedCategory] = useState<string>('')

	useEffect(() => {
		console.log('sadasd')
		async function getAllPosts() {
			const data = await getPosts.fetchPosts()
			setPost(data)
		}

		getAllPosts()
	}, []);

	const addNewPost = async () => {
		const lastId = (posts.length + 1).toString()
		const data = await setPostService.fetchSetPost(inputValue, lastId)
		setPost(prev => [...prev, data])
		setInput({title: '', body: ''})
	}

	const deletePost = async (id: string) => {
		const deletedObj = await deletePostService.fetchDeletePost(id)
		setPost(prev => prev.filter(post => post.id !== deletedObj.id))
	}

	useEffect(() => {
		setPost(prev => [...prev].sort((a, b) => a[selectedCategory].localeCompare(b[selectedCategory])))
	}, [selectedCategory]);

	const contextValue: PostContext = {
		posts,
		inputValue,
		setPost,
		setInput,
		addNewPost,
		deletePost,
		children,
		selectedCategory,
		setSelectedCategory,
	}

	return <PostContext.Provider value={contextValue}>
		{children}
	</PostContext.Provider>
}