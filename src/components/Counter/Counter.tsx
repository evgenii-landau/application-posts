import styles from './Counter.module.scss'
import {FC, useState} from "react";

export const Counter: FC = () => {
	const [count, setCount] = useState<number>(0)
	const [string, setString] = useState<string>('Hello')

	return (
		<div className={styles.counter}>
			<h1>{string}</h1>
			<input type="text" onChange={(e) => (setString(e.target.value))} value={string}/>
			<span>{count}</span>
			<button onClick={() => setCount(prev => prev + 1)}>Increment</button>
			<button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
		</div>
	)
}
