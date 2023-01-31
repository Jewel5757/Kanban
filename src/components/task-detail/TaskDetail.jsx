import { useRouteMatch } from 'react-router-dom'
import css from './TaskDetail.module.css'
import { Link } from 'react-router-dom'

const TaskDetail = props => {
	const match = useRouteMatch()
	const {taskId} = match.params
	const {tasks} = props

	

	const task = tasks.find(task => task.id === taskId)

	return (
		<div className={css.wrapper}>
			<Link to='/' className={css.homeLink}>Закрыть X</Link>
			{task ? (
				<>
			
			<div className={css.header}>
				<h2 className={css.title}>{task.title}</h2>
				<p className={css.description}>{task.description || ('no description')}</p>
				
			</div>
			</>
			) :(<h2>Task not exist</h2>) }
		</div>
	)
}

export default TaskDetail
