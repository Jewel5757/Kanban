
import css from './Header.module.css'
import ProfileOption from '../profile/profileOptions'

const Header = () => {
	return (
		<header className={css.header}>

			<h1 className={css.title}>Awesome Kanban Board</h1>
			<ProfileOption />
		</header>
	)
}

export default Header
