import styles from './App.module.scss'
import {FC, useEffect, useRef, useState} from "react";
// import {Counter} from "./components/Counter/Counter.tsx";
// import {PostItem} from "./components/PostItem/PostItem.tsx";
import {getPosts} from "./services/post.service.ts";
import {PostItems} from "./types/types.ts";
import {PostList} from "./components/PostList/PostList.tsx";
import {Input} from "./components/UI/Input/Input.tsx";
import {Button} from "./components/UI/Button/Button.tsx";
import {setPostService} from "./services/setPost.service.ts";
import {deletePostService} from "./services/deletePost.service.ts";


function App(): FC {
	const [posts, setPost] = useState<PostItems[]>([])
	const inputRefTitle = useRef<HTMLInputElement | null>(null);
	const inputRefDesc = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		async function getAllPosts() {
			const data = await getPosts.fetchPosts()
			setPost(data)
		}

		getAllPosts()
	}, [posts]);

	const addNewPost = async () => {
		const lastId = (posts.length + 1).toString()
		const data = await setPostService.fetchSetPost(inputRefTitle.current?.value, inputRefDesc.current?.value, lastId)
		setPost(prev => [...prev, data])
	}

	async function deletePost(id) {
		const data = await deletePostService.fetchDeletePost(id)
		console.log(data)
	}

	return (
		<>
			<div className={styles.appWrapper}>
				<form className={styles.form}>
					<Input inputRefDesc={inputRefDesc} inputRefTitle={inputRefTitle}>Название поста</Input>
					<Input inputRefDesc={inputRefDesc} inputRefTitle={inputRefTitle}>Описание поста</Input>
					<Button addNewPost={addNewPost}>Создать пост</Button>
				</form>
				<PostList posts={posts} deletePost={deletePost}/>
				{/*<PostList posts={posts}/>*/}
			</div>
		</>
	)
}

export default App




















