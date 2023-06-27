import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize'
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <Navbar className="menu" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
            alignLinks="right"
            brand={<span style={{ color: theme.color }} className="brand-logo" >Player Cards</span>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}>
            <ul>
                <li> <Link style={{ color: theme.color }} to='/'><Icon left></Icon> Home</Link>
                </li>
                <li to='/about'><Link style={{ color: theme.color }} to='/about'> <Icon left></Icon> About</Link>
                </li>
                <li to='/news'> <Link style={{ color: theme.color }} to='/news'> <Icon left></Icon> News</Link>
                </li>
                <li href='/contact'><Link style={{ color: theme.color }} to='/contact'> <Icon left></Icon> Contact </Link>
                </li>
                <li className='switch' style={{ position: 'relative' }}>
                    <a className='switch-mode' href='#' onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none'
                        }} data-testid="toggle-theme-btn"
                    >
                        {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </li>
            </ul>
        </Navbar>
    )
}