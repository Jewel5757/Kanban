import clsx from 'clsx'
import { useState } from 'react'
import css from './Forms.module.css'
import {useEffect} from 'react';



const FormAddNewTask = props => {
	const {addNewTask, setFormVisible} = props
	const [values, setValues] = useState({
		title: '',
		description: '',
	})

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}


	const handleSubmit = (e) => {
		e.preventDefault()
		if (values.title){
			addNewTask(values.title, values.description)
		} else {
			alert('Вы не ввели название задачи!')
		}
		setFormVisible(false)
	}


	return (
		<form className={css.form} onSubmit ={handleSubmit}>
			<button 
			className={css.submit} 
			type='submit' 
			onClick={handleChange}
			disabled={
				values.title < 1 
			  }
			>Submit</button>
			<input
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='Enter task title'
				value={values.title}
				onChange={handleChange}
			/>

			<textarea
				className={clsx(css.input, css.textarea)}
				id='taskDescription'
				name='description'
				placeholder='Enter task description'
				value={values.description}
				onChange={handleChange}
			/>
		</form>
	)
}

export default FormAddNewTask
