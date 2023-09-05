import '../style/Card.css';
import Image from '../components/Image';

const Card = (props) => {
    return (
        <div className="Card">
            <div className="Card--Image"><Image src = {props.imageUrl} endDate = {props.endDate}/></div>
            <div className="Card--Details">
                <div className="Details--Location">
                    <span><img src={process.env.PUBLIC_URL + `/Images/Icons/Location.png`} alt="Location icon"/>{props.location}</span> <a href={props.googleMapsUrl}>View in Google Maps</a>
                </div>
                <div className='Details--Name'>
                    <h1>{props.title}</h1>
                </div>
                <div className='Details--Date'><span>{props.startDate} - {props.endDate}</span></div>
                <div className='Details--Description'>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;