import styles from './App.module.scss'
import {PostList} from "./components/PostList/PostList.tsx";
import {Input} from "./components/UI/Input/Input.tsx";
import {Button} from "./components/UI/Button/Button.tsx";



function App() {
	return (
		<>
			<div className={styles.appWrapper}>
				<form className={styles.form}>
					<Input>Название поста</Input>
					<Input>Описание поста</Input>
					<Button>Создать пост</Button>
				</form>
				<PostList/>
			</div>
		</>
	)
}

export default App




















