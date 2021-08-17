import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './HowItWorks.module.sass';
import CONSTANTS from '../../constants';
import Header from '../../components/Header/Header';

const HowItWorks = (props) => {
    const { isFetching } = props;
    return(
        <>
            <Header/>
            <div className = {styles.main}>
                <div className = {styles.wrap}>
                    <div className = {styles.howDoesSquadhelpWork}>
                        <div className = {styles.leftContainer}>
                            <span>World's #1 Naming Platform</span>
                            <div>
                                <h1>How Does Squadhelp Work?</h1>
                                <p>Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.</p>
                            </div>
                            <div className = {styles.howItWorksButton}>
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
                    <div className = {styles.servicesContainer}>
                        <div className = {styles.sectionHeader}>
                            <span>Our Services</span>
                            <h1>3 Ways To Use Squadhelp</h1>
                            <p>Squadhelp offers 3 ways to get you a perfect name for your business.</p>
                        </div>
                        <div className = {styles.cardDeck}>
                            <div className = {styles.cardBody}>
                                <div className = {styles.cardInfo}>
                                    <img src="https://i.imgur.com/yxmXAF0.png"></img>
                                    <h3>Launch a Contest</h3>
                                    <p>Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.</p>
                                </div>
                                <div className = {styles.howItWorksButton}>
                                    <a>
                                        <small class="fas fa-play"></small>
                                        Launch a Contest
                                    </a>
                                </div>
                            </div>
                            <div className = {styles.cardBody}>
                                <div className = {styles.cardInfo}>
                                    <img src="https://i.imgur.com/ecc1BPM.png"></img>
                                    <h3>Explore Names For Sale</h3>
                                    <p>Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design</p>
                                </div>
                                <div className = {styles.howItWorksButton}>
                                    <a>
                                        <small class="fas fa-play"></small>
                                        Explore Names For Sale
                                    </a>
                                </div>
                            </div>
                            <div className = {styles.cardBody}>
                                <div className = {styles.cardInfo}>
                                    <img src="https://i.imgur.com/ndxBA1a.png"></img>
                                    <h3>Agency-level Managed Contests</h3>
                                    <p>Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs</p>
                                </div>
                                <div className = {styles.howItWorksButton}>
                                    <a>
                                        <small class="fas fa-play"></small>
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className = {styles.wrap}>
                    <div className = {styles.sectionHeader}>
                        <img src = "https://i.imgur.com/VdyPA62.png"></img>
                        <h1>How Do Naming Contests Work?</h1>
                    </div>
                    <div className = {styles.howDoNamingContestsWork}>
                        <div className = {styles.imageDiv}></div>
                        <div className = {styles.steps}></div>
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
  