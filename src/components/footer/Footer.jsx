import css from './Footer.module.css'
import { LIST_TYPES, LIST_COPY } from '../../config'

const Footer = props => {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts} ></div>
			{Object.values(LIST_TYPES).map(type => {
				const listCount = tasks.filter(task => task.status === type)
				if (!listCount.length) return null
				return (
					<div key={type} className={css.counts}>{LIST_COPY[type]}: {listCount.length} | </div>
				)
			})}
			<div className={css.copy}>
			<p>Created by Tatyana Chayko</p>
			</div>
		</footer>
	)
}

export default Footer
