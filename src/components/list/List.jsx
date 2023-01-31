import css from './List.module.css'
import FormAddNewTask from '../forms/FormAddNewTask'
import DropDownList from '../dropDownList/DropDownList'
import { LIST_TYPES, LIST_COLORS } from '../../config'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const List = props => {
	const {title, type, tasks, addNewTask, setTasks, addNewTaskR  } = props
	const [isFormVisible, setFormVisible] = useState(false)
	const initialState = JSON.parse(window.localStorage.getItem('tasks'))
	
	const checkArr = Array.isArray(initialState)

	let btnReady = []
	if (checkArr) {
		btnReady = initialState.filter(obj => {return obj.status === "backlog"}) 
	}

	let btnInProgress = []
	if (checkArr) {
		btnInProgress = initialState.filter(obj => {return obj.status === "ready"}) 
	}
	
	let btnFinish = []
	if (checkArr) {
		btnFinish = initialState.filter(obj => {return obj.status === "inProgress"}) 
	}
	

	const handleClick = () => {
		setFormVisible(!isFormVisible)
	}

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{ tasks.length? 
				tasks.map(task => 
					<Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
						<div key = {task.id} className={css.task} style = {{background: LIST_COLORS[type]}}>{task.title}</div>
					</Link>
				): <p>Tasks have not been added yet</p>
				
			}
			{type === LIST_TYPES.BACKLOG  && (
			<button className={css.addButton} onClick= {handleClick} 
			style={{ display: !isFormVisible ? "block" : "none"}}
			> + Add card</button>)}
	
			
			{type === LIST_TYPES.READY && (
			<button className={css.addButton} onClick= {handleClick} 
			style={{ display: !isFormVisible ? "block" : "none"}}
			disabled= { btnReady.length == 0 }
			> + Add card</button>)}

			{type === LIST_TYPES.IN_PROGRESS  && (
			<button className={css.addButton} onClick= {handleClick} 
			style={{ display: !isFormVisible ? "block" : "none"}}
			disabled= { btnInProgress.length == 0 }
			> + Add card</button>)}

			{type === LIST_TYPES.FINISHED  && (
			<button className={css.addButton} onClick= {handleClick} 
			style={{ display: !isFormVisible ? "block" : "none"}}
			disabled= { btnFinish.length == 0 }
			> + Add card</button>)}
			

			{type === LIST_TYPES.BACKLOG && isFormVisible && (
				<FormAddNewTask 
				addNewTask = {addNewTask} 
				setFormVisible={setFormVisible}/>
			)}

			{type !== LIST_TYPES.BACKLOG && isFormVisible && (
			<DropDownList
					type={type}
					tasks = {tasks}
					setFormVisible = {setFormVisible}
					isFormVisible = {isFormVisible}
					addNewTaskR = {addNewTaskR}
					initialState = {initialState}
				    setTasks = {setTasks}/> 
			)}


		</div>
	)
}

export default List
