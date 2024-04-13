import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import { AiFillHome } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import HeaderContext from '../../reactContext/HeaderContext'
import './index.css'

const Header = props => {
    const onClickLogout = () => {
      Cookies.remove('jwt_token')
      const {history} = props
      history.replace("/login")
    }
    return (
        <HeaderContext.Consumer>
            {value => {
                const {isActive, changeToHome, changeToClasses} = value

                const onClickHome = () => {
                    changeToHome()
                }
                const onClickClass = () => {
                    changeToClasses()
                }
                const homeClass = isActive === 'HOME' ? "activeRoute":''
                const classesClasses = isActive === 'CLASSES' ? "activeRoute" : ''
                return (
                    <nav className='navbar'>
                        <h3 className='logo'>Karo Abhayaas</h3>
                        <div className='home-classes'>
                            <Link to="/" className='link' onClick={onClickHome}>
                              <p className={`home ${homeClass}`}>Home</p>
                              <AiFillHome className={`home-icon ${homeClass}`}/>
                            </Link>                            
                            <Link to="/classes" className='link' onClick={onClickClass}>
                              <p className={`home ${classesClasses}`}>Classes</p>
                              <FaBookReader className={`book-icon ${classesClasses}`}/>
                            </Link>
                            <button type="button" className='logout-button' onClick={onClickLogout}>Logout</button>
                            <button type="button" className='logout-icon' onClick={onClickLogout}>
                                <LuLogOut />
                            </button>
                        </div>
                    </nav>
                )
            }}
        </HeaderContext.Consumer>
    )
}

export default withRouter(Header)