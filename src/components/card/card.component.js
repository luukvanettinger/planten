import React from 'react';
import './card.styles.css';

// Icons
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { GiEarthAmerica } from 'react-icons/gi';
import { GiWaterDrop } from 'react-icons/gi';
import { BsCalendar } from 'react-icons/bs';


export const Card = props => (
    <div className='flex-container'>
        <div className="left"> 
            <h3 className="latinname">{props.plant.latinname}</h3>
        </div>
        <div>
            <img
                alt='plant'
                src={props.plant.foto}
                className='plant-image'
            />
        </div>
        <div className="right">
            <h2>{props.plant.name}</h2>
            <hr align="left" className="lijn"></hr>
            <p className="inleiding">{props.plant.tekst}</p>
            <div className="info">
                <div className="icon-row">
                    <div className="icon-container">
                        <div className="icon"><GiEarthAmerica margin-top='5vw' size={18} color='#2b2b2b' /></div>
                        <div className="text"><p>{props.plant.herkomst}</p></div>
                    </div>
                    <div className="icon-container">
                        <div className="icon"><BsCalendar size={18} color='#2b2b2b' /></div>
                        <div className="text"><p>{props.plant.datum}</p></div>
                    </div>
                </div>
                <div className="icon-row">
                    <div className="icon-container">
                        <div className="icon"><GiWaterDrop size={18} color='#2b2b2b' /></div>
                        <div className="text"><p>{props.plant.water}</p></div>
                    </div>
                </div>
                <div className="image-container">
                    <img 
                        alt='plant'
                        src='https://luukvanettinger.github.io/plantenData/images/nestvaren_horizontal2.jpg'
                        className='image-horizontal'
                    />
                    <img 
                        alt='plant'
                        src='https://luukvanettinger.github.io/plantenData/images/pannenkoekenplant_horizontal.jpg'
                        className='image-horizontal2'
                    />
                </div>
                <div className="infofooter">
                    <div className="icon-arrow1"><BsArrowLeft size={27} /></div>
                    <div className="icon-arrow2"><BsArrowRight size={27} /></div>        
                    <div className="plantnumber"><h4>______ 0{props.plant.id}</h4></div>      
                </div>
            </div>
        </div>
    </div>
);