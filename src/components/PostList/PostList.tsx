import styles from'./PostList.module.scss'
import {PostItem} from "../PostItem/PostItem.tsx";

export const PostList = ({posts, deletePost}) => {
	return (
		<ul className={styles.postList}>
			<h1>Post List</h1>
			{posts.map(obj => (
				<PostItem key={obj.id} {...obj} deletePost={deletePost}/>
			))}
		</ul>
	)
}