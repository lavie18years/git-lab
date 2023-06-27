import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Footer() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <nav className='footer' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div><p >copyright @ 2023</p></div>
        </nav>
    )
}