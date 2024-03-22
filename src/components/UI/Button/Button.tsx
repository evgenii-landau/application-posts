import styles from './Button.module.scss'
import React, {useContext, useEffect, useState} from "react";
import {PostContext} from "../../../Context/PostContext.tsx";

interface ButtonProps {
	children: string
}

export const Button: React.FC<ButtonProps> = ({children}) => {
	const {addNewPost, inputValue} = useContext(PostContext)
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	useEffect(() => {
		if (inputValue.title !== '' && inputValue.body !== '') {
			setIsDisabled(false)
		} else {
			setIsDisabled(true)
		}

	}, [inputValue.title, inputValue.body]);

	return (
		<button className={styles.button} onClick={() => addNewPost()} type='button' disabled={isDisabled}>{children}</button>
	)
}