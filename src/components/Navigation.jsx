import {NavLink} from 'react-router-dom'


function Navigation () {
    return (
    <>
        <header className='d-flex justify-content-between'>
            <h1 className='cursive'>Opitz</h1>
            
        <nav className='navbar'>
            
            <NavLink to="/portfolio" className='nav-link ms-2' activeclassname='active'>Portfolio</NavLink>
            <NavLink to="/resume" className='nav-link ms-2' activeclassname='active'>Resume</NavLink>
            <NavLink to="/about" className='nav-link ms-2' activeclassname='active'>About Me</NavLink>
            <NavLink to="/contact" className='nav-link ms-2' activeclassname='active'>Contact</NavLink>
        </nav>
        </header>

    </>
    )
}
export default Navigation