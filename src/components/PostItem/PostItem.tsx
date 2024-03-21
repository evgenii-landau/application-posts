import {PostItems} from "../../types/types.ts";
import styles from './PostItem.module.scss'
import React, {useContext} from "react";
import {PostContext} from "../../Context/PostContext.tsx";

interface PostItemProps {
	post: PostItems
}

export const PostItem: React.FC<PostItemProps> = ({post}) => {
	const {deletePost} = useContext(PostContext)


	return (
		<li className={styles.postItem}>
			<div>
				<strong>{post.id}. {post.title}</strong>
				<div>
					{post.body}
				</div>
			</div>
			<div>
				<button onClick={() => deletePost(post.id)}>Delete</button>
			</div>
		</li>
	)
}