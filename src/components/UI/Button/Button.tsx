import styles from './Button.module.scss'
import React, {useContext, useState} from "react";
import {PostContext} from "../../../Context/PostContext.tsx";

interface ButtonProps {
	children: string
}

export const Button: React.FC<ButtonProps> = ({children}) => {
	const {addNewPost} = useContext(PostContext)

	const [isDisabled, setIsDisabled] = useState<boolean>(false)

	return (
		<button className={styles.button} onClick={() => addNewPost()} type='button' disabled={isDisabled}>{children}</button>
	)
}