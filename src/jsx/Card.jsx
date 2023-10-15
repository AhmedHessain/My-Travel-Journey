/* eslint-disable react/prop-types */
import location_Icon from '../Images/location-icon.svg'
import '../css/Card.css'
export default function Card(props){
    let {title,location,googleMapsUrl,startDate,endDate,description,imageUrl} = props;
    return (
        <div className='card'>
            <img src={imageUrl} alt='mountain'/>
            <div className='card--info'>
                <div className='card--location-info'>
                    <img src={location_Icon}/>
                    <p>{location}</p>
                    <a href={googleMapsUrl} target='_blank' rel="noreferrer">View on Google Maps</a>
                </div>
                <h1>{title}</h1>
                <p className='date'>{startDate} - {endDate}</p>
                <p className='description'>{description}</p>
            </div>
        </div>
    )
}