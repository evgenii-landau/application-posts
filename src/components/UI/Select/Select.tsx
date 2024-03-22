import styles from './Select.module.scss'
import {PostContext, sortCategroy} from "../../../Context/PostContext.tsx";
import {useContext} from "react";

export const Select = () => {
	const {selectedCategory, setSelectedCategory} = useContext(PostContext)

	return (
		<>
			<select className={styles.select} name="sort-category" id="category" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
				<option value='' disabled>Не выбрано</option>
				{sortCategroy.map(obj => (
					<option key={obj.value} value={obj.value}>{obj.name}</option>
				))}
			</select>
		</>
	)
}
