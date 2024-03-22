import styles from './PostForm.module.scss';
import {Input} from "../UI/Input/Input.tsx";
import {Button} from "../UI/Button/Button.tsx";

export const PostForm = () => {
	return (
		<form className={styles.form}>
			<Input>Название поста</Input>
			<Input>Описание поста</Input>
			<Button>Создать пост</Button>
		</form>
	)
}