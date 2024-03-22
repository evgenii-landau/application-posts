import styles from './App.module.scss'
import {PostList} from "./components/PostList/PostList.tsx";
import {PostForm} from "./components/PostForm/PostForm.tsx";

function App() {
	return (
		<>
			<div className={styles.appWrapper}>
				<PostForm/>
				<PostList/>
			</div>
		</>
	)
}

export default App




















