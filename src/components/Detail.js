import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFirms';
import { useState } from 'react';
import ModalCase from './ModalCase';
import { Icon } from 'react-materialize';
export default function Detail() {
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='container'>
            <div className='badge'>
                <h2>{film.title}</h2>
            </div>

            <div className='row'>
                <div className='image_film'>
                    <img src={`../${film.img}`} />
                </div>
                <div className='product-details'>
                    <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                        <Icon>V</Icon>
                    </a>
                    {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
                    <div class="product-info">
                        <h2>{film.nation} - {film.year}</h2>
                    </div>
                    <div class="product-info">
                        <h5>{film.info}</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}