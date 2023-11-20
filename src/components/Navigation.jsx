import {NavLink} from 'react-router-dom'


function Navigation () {
    return (
    <>
        <header className='d-flex justify-content-between'>
            <h1>Andrew's Portfolio</h1>
            
        <nav className='navbar'>
            
            <NavLink to="/portfolio" className='nav-link ms-2' activeClassName='active'>Portfolio</NavLink>
            <NavLink to="/resume" className='nav-link ms-2' activeClassName='active'>Resume</NavLink>
            <NavLink to="/about" className='nav-link ms-2' activeClassName='active'>About Me</NavLink>
            <NavLink to="/contact" className='nav-link ms-2' activeClassName='active'>Contact</NavLink>
        </nav>
        </header>

    </>
    )
}
export default Navigation