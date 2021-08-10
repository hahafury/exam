import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';
import styles from './HowItWorks.module.sass';
import CONSTANTS from '../../constants';
import Header from '../../components/Header/Header';

const HowItWorks = (props) => {
    const { isFetching } = props;
    return(
        <>
            <Header/>
            <div className = {styles.main}>
                <div className = {styles.howDoesSquadhelpWork}>
                    <div className = {styles.leftContainer}>
                        <span>World's #1 Naming Platform</span>
                        <div>
                            <h1>How Does Squadhelp Work?</h1>
                            <p>Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.</p>
                        </div>
                        <div className = {styles.videoButton}>
                            <a>
                                <small class="fas fa-play"></small>
                                Play Video
                            </a>
                        </div>
                    </div>
                    <div className = {styles.rightContainer}>
                        <img src = "https://i.imgur.com/aKc9D6P.png"></img>
                    </div>
                </div>
            </div> 
        </>
    )
};

const mapStateToProps = (state) => {
    const { isFetching } = state.userStore;
    return { isFetching };
};

export default connect(mapStateToProps, null)(HowItWorks);
  