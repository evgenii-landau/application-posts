import styles from './Input.module.scss'
import React, {useContext} from "react";
import {PostContext} from "../../../Context/PostContext.tsx";

interface InputProps {
	children: string;
}

export const Input: React.FC<InputProps> = ({children}) => {
	const {inputValue, setInput} = useContext(PostContext)
	const value = children.split(' ').includes('Описание') ? inputValue.body : inputValue.title

	return (
		<div>
			<input className={styles.input} onChange={(e) => children.split(' ').includes('Описание') ? setInput({...inputValue, body: e.target.value}) : setInput({...inputValue, title: e.target.value})} value={value} type="text" placeholder={children}/>
		</div>
	)
}