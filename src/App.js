import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'




function App() {
	const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
	const [tasks,setTasks] = useState(initialState)


	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])
  return (
	<BrowserRouter>
		<div className='wrapper'>
			<Header />
			<Main tasks={tasks} setTasks={setTasks} />
			<Footer tasks={tasks} />
		</div>
	</BrowserRouter>
  )
}

export default App
