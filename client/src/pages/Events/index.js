import React, {useState, useEffect}from 'react';
import  { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';
import styles from './Events.module.sass';
import Header from '../../components/Header/Header';
import EventElement from './EventElement/EventElement';


const Events = () => {

    const mapEvents = (event, index) => {
        return (
                <EventElement event = {event}/>
        );
    };

    const eventsSort = (a,b) => {
        if (Date.parse(a.eventDeadline) > Date.parse(b.eventDeadline)) return 1
        if (Date.parse(a.eventDeadline) < Date.parse(b.eventDeadline)) return -1
        else return 0
    }
    
    if (localStorage.getItem('accessToken') == null) 
        return <Redirect to="/login"/>;
    else
        return(
            <>
                <Header/>
                <div className = {styles.events}>
                    <div className = {styles.eventHeader}>
                        <p>Live upcomming checks</p>
                        <div className = {styles.remainingTime}>
                            Remaining time
                            <img src = "https://i.imgur.com/mvHW8IJ.png"></img>
                        </div>
                    </div>
                    
                    <div className = {styles.eventForm}>
                        {
                            JSON.parse(localStorage.getItem('events')).map(mapEvents).sort(eventsSort)
                        }
                    </div>
                </div>  
                
            </>
        );

}

export default Events;