import styles from './Input.module.scss'
import {FC, useState} from "react";

interface InputProps {
	children: string;
	inputRefTitle: React.MutableRefObject<HTMLInputElement | null>;
	inputRefDesc: React.MutableRefObject<HTMLInputElement | null>;
}

export const Input: FC<InputProps> = ({children, inputRefTitle, inputRefDesc}) => {
	const [value, setValue] = useState<string>('')


	return (
		<div>
			<h1>{value}</h1>
			<input className={styles.input} ref={children.split(' ').includes('Описание') ? inputRefDesc : inputRefTitle}  type="text" placeholder={children}/>
		</div>
	)
}