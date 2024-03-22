import styles from'./PostList.module.scss'
import {PostItem} from "../PostItem/PostItem.tsx";
import React, {useContext} from "react";
import {PostContext} from "../../Context/PostContext.tsx";
import {Select} from "../UI/Select/Select.tsx";


export const PostList: React.FC = () => {
	const {posts} = useContext(PostContext)

	return (
		<ul className={styles.postList}>
			<div className={styles.postHeader}>
				<h1>Post List</h1>
				<Select/>
			</div>
			{posts.map(post => (
				<PostItem key={post.id} post={post}/>
			))}
			{posts.length === 0 && (
				<div>
					<h2>У вас пока нет постов</h2>
				</div>
			)}
		</ul>
	)
}