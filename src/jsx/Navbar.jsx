import logo from '../Images/logo.svg'
import '../css/Navbar.css'

export default function Navbar(){
    return (
        <nav className='Navbar'>
            <img src={logo} alt='golbal-logo'/>
            <p>my travel journal</p>
        </nav>
    )
}