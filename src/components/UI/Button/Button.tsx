import styles from './Button.module.scss'
import {FC, useState} from "react";

interface ButtonProps {
	children: string
	addNewPost: () => void
}

export const Button: FC<ButtonProps> = ({children, addNewPost}) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(false)

	return (
		<button className={styles.button} onClick={() => addNewPost()} type='button' disabled={isDisabled}>{children}</button>
	)
}