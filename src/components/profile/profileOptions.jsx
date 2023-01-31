import Logo from '../../assets/user-avatar.png'
import Form4Profile from '../formForProfile/Form4Profile'
import css from './profile.options.module.css'
import { useState } from 'react'


const ProfileOption = (e) => {
    const [isFormVisible, setFormVisible] = useState(false)
    const [isActive, setIsActive] = useState(true);
    
    const openOptions = () => {
        setFormVisible(!isFormVisible)
        setIsActive(!isActive)
    }
    
	return (
        <div>
			<img src={Logo} alt='' />
            <button className={css.btnOption}
            style={{ backgroundImage: isActive ? 'url("../Vector.png")' : 'url("../Vector1.png")',}}
            onClick={openOptions}>
            </button>
            { isFormVisible && (
				 <Form4Profile />
			)}
        </div>
	)
}

export default ProfileOption
