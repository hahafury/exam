import React from 'react';
import styles from './EventContainer.module.sass';
import EventElement from '../EventElement/EventElement';

const EventContainer = () => {

    const mapEvents = (event, index) => {
        return (
                <EventElement event = {event}/>
        );
    };

    return(
        <>
            <div className = {styles.events}>
                <div className = {styles.eventHeader}>
                    <p>Live upcomming checks</p>
                    <div className = {styles.remainingTime}>
                        Remaining time
                        <img src = "https://i.imgur.com/mvHW8IJ.png" alt = "remaining-time-icon"></img>
                    </div>
                </div>
                
                <div className = {styles.eventForm}>
                    {
                        JSON.parse(localStorage.getItem('events')).map(mapEvents)
                    }
                </div>
            </div>  
        </>
    );

}

export default EventContainer;