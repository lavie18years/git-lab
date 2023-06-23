import React, { Component } from 'react';
export default class Navigation extends Component {
    render() {
        return (
            <div className='task'>
                <nav>
                    <ul className='nav'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}