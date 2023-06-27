import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFirms';

export default function Detail() {
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });
    return (
        <div className='container'>
            <div className='badge'>
            <h1>{film.title}</h1>
            </div>
            <div className='row'>
                <div className='image_film'>
                    <img src={`../${film.img}`} />
                </div>
                <div className='product-details'>
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