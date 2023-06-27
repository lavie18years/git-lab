import React, { Component } from "react";
import { Films } from "../shared/ListOfFirms";
import { useState } from "react";
import { Link } from 'react-router-dom'
export default function Firm() {
    const [film, setFilm] = useState([]);
    return (
        <div>
            <div class="content">
                {Films.map((film) => (
                    <div key={film.id}>
                        <a src={film.img} className="box">
                            <div className="card">
                                <img src={film.img} alt={film.title} />
                                <h5>{film.title}</h5>
                                <p>{film.year} - {film.nation}</p>
                                <Link to={`detail/${film.id}`}>
                                <p className="but"><button onClick={() => { setFilm(film) }}><a href='#popup1' id='openPopUp'>Detail</a></button></p>
                                </Link>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={film.img} />
                    <h2>{film.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='info'>
                        {film.info}
                    </div>
                </div>
            </div>
        </div>
    )
}