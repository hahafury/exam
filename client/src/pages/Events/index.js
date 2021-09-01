import React from 'react';
import  { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';
import styles from './Events.module.sass';
import Header from '../../components/Header/Header';
import EventContainer from './EventContainer/EventContainer';
import EventCreateForm from './EventCreateForm/EventCreateForm';
import { changeEventsModeView } from '../../actions/actionCreator'


const Events = (props) => {
    const {
        eventsModeView, changeMode,
    } = props;
    setTimeout(()=>{
        console.log(eventsModeView);
    },500)
    if (localStorage.getItem('accessToken') == null) 
        return <Redirect to="/login"/>;
    else
        return(
            <>
                <Header/>
                <div className = {styles.eventsPageContainer}>
                    <div className={styles.aside}>
                        <span className={styles.headerAside}>Select Option</span>
                        <div className={styles.optionsContainer}>
                            <div 
                                className= {styles.optionContainer}
                                onClick = {()=>{changeMode(CONSTANTS.EVENTS_INFO_MODE)}}
                            >
                                Events
                            </div>
                            <div
                                className= {styles.optionContainer}
                                onClick = {()=>{changeMode(CONSTANTS.EVENTS_CREATE_MODE)}}
                            >
                                Create event
                            </div>
                        </div>
                    </div>
                    <div>
                        {eventsModeView === CONSTANTS.EVENTS_INFO_MODE ? <EventContainer/> : <EventCreateForm/>}
                    </div>
                </div>
            </>
        );

}

const mapStateToProps = (state) => {
    const { data } = state;
    const { eventsModeView } = state.eventsReducer;
    return { data, eventsModeView} ;
};
  
const mapDispatchToProps = (dispatch) => ({
    changeMode: (data) => dispatch(changeEventsModeView(data)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Events);