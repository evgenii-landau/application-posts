import {PostItems} from "../../types/types.ts";
import styles from './PostItem.module.scss'
import {FC} from "react";


export const PostItem: FC<PostItems> = ({id, title, body, deletePost}) => {
	return (
		<li className={styles.postItem}>
			<div>
				<strong>{id}. {title}</strong>
				<div>
					{body}
				</div>
			</div>
			<div>
				<button onClick={() => deletePost(id)}>Delete</button>
			</div>
		</li>
	)
}