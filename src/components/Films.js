import React, { Component } from "react";
import { Firms } from "../shared/ListOfFirms";
export default class Firm extends Component {
    render() {
        return (
            <div className='content'>
                {Firms.map((Firm) => (
                    <div className='box'>
                        <div className='card'>
                            <img src={Firm.img} />
                            <h5>{Firm.title}</h5>
                            <p>{Firm.year} - {Firm.nation}</p>
                            <p className="but"><button>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}