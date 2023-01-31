import css from './Board.module.css'
import {LIST_TYPES, LIST_COPY } from '../../config'
import List from '../list/List'
import uniqid from 'uniqid'
import { useRouteMatch, Link } from 'react-router-dom'

const Board = (props) => {
	const {tasks, setTasks } = props
	const match = useRouteMatch()
	const {taskId} = match.params
	
	

	const addNewTask = (title, description, status = "backlog") => {
		const newTask = {
			id: uniqid(),
			title: title,
			description: description,
			status: status,
		}
		setTasks([...tasks, newTask])
	}
	
	const addNewTaskR = (id, title, description, status = "ready") => {
		const newStatus = status	
		const updatedTasks = tasks.map(task => {
			if (task.id === id) {
				return {...task, status: newStatus}
			}
			return task
		})
		
		setTasks(updatedTasks)
	}

	return (
		<div className={css.board} >
			{Object.values(LIST_TYPES).map( type => {
				const listTasks = tasks.filter(task => task.status === type)
				return (
					<List 
					key={type}
					type={type} 
					title={LIST_COPY[type]}
					setTasks = {setTasks}
					tasks={listTasks}
					addNewTaskR = {addNewTaskR}
					addNewTask={addNewTask}/>
				)
			})}
		</div>
	)
}

export default Board
