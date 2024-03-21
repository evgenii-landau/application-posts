import styles from'./PostList.module.scss'
import {PostItem} from "../PostItem/PostItem.tsx";
import React, {useContext} from "react";
import {PostContext} from "../../Context/PostContext.tsx";


export const PostList: React.FC = () => {
	const {posts} = useContext(PostContext)

	return (
		<ul className={styles.postList}>
			<h1>Post List</h1>
			{posts.map(post => (
				<PostItem key={post.id} post={post}/>
			))}
		</ul>
	)
}