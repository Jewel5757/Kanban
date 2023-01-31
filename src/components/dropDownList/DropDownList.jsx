import { LIST_TYPES } from '../../config'
import css from'./DropDownList.module.css';
import { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'


const DropDownList = props => {
	const {type, isFormVisible, setFormVisible,  addNewTaskR } = props
	const initialState = JSON.parse(window.localStorage.getItem('tasks'))
    const [tasks,setTasks] = useState(initialState)

	const backlog = tasks.filter(obj => {return obj.status === "backlog"});
	const ready = tasks.filter(obj => {return obj.status === "ready"});
	const inProgress = tasks.filter(obj => {return obj.status === "inProgress"});
	

		const changeStatus = (e) => { 
		e.preventDefault()
		addNewTaskR(e.target.id, e.target.title, e.target.getAttribute('data-description'), type)
		setFormVisible(false) 	
	};  
	

		 return (
			<div  className={css.drop}>
				<div className='dropdown'  onClick={() => setFormVisible(! isFormVisible)} >
				</div>
				 <div className={css.dropdownList}  >
			{ type === LIST_TYPES.READY && backlog.map(title => 
		       <p key={title.id} id = {title.id}  title ={title.title} className= {css.title}  data-description = 'description'  data-des = {title.description} onClick= {changeStatus} >{title.title}</p>
		    )}	
		    
			{ type === LIST_TYPES.IN_PROGRESS && ready.map(title => 
		       <p key={title.id} id = {title.id}  title ={title.title} className= {css.title}  data-description = 'description'  data-des = {title.description} onClick= {changeStatus} >{title.title}</p>
		    )}	
			
			{ type === LIST_TYPES.FINISHED && inProgress.map(title => 
		       <p key={title.id} id = {title.id}  title ={title.title} className= {css.title}  data-description = 'description'  data-des = {title.description} onClick= {changeStatus} >{title.title}</p>
		    )}	
			
				</div> 	 	
			</div>
		) 
}
export default DropDownList;