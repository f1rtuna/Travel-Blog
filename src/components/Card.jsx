// title:
// location:
// googleMapsUrl:
// startDate:
// endDate:
// description: 
// imageUrl: 
import React from "react"
import pin from "../assets/pin.png"


function Card(props){

    return (
        <div className="Card">
            <div className="left-card">
                <img src={props.data.imageUrl} alt="image url" />
            </div>
            <div className="right-card">
                <div className="location">
                    <p>{props.data.location}</p>
                    <img src={pin} alt="pin" />
                    <a href= {props.data.googleMapsUrl}>view on Google Maps</a>
                </div>
                <h1 className="title">{props.data.title}</h1>
                <p className="date-range">{props.data.startDate} - {props.data.endDate}</p>
                <p className="description">{props.data.description}</p>
            </div>
            
        </div>
        
    )
}

export default Card

