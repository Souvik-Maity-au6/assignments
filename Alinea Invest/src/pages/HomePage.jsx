import React from 'react'
import Button from '../components/Button'
import Card from "../components/Card"
import { data } from '../data'
import '../styles/HomePage.css'
const HomePage = () => {
    return (
        <div className="home-page-main">
            <div className="banner-container">
                <div className="banner-text">
                    <p className="banner-header">The Most Powerful Checking Account</p>
                    <p className="banner-description">Our checking account gives you higher returns
                        than a savings account with no hidden fees.</p>
                    <div className="subscribe-input-container">
                        <div className="input">
                            <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/email.svg" alt="email" />
                            <input className="subscribe-email-input" type="email" placeholder="Enter Email address" required />
                            <Button width="130px" height="45px" backgroundColor="#4643EE" color="white" text="Join Now" />
                        </div>
                    </div>
                    <div className="flag-description">
                        <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/createaccount-homeaddress-flag%403x.png" alt="USA flag" width="50px" height="30px" />
                        <p style={{ marginLeft: "30px", fontSize: '18px' }}>283 spots left for Priority Access</p>
                    </div>
                    <div className="playstore-available">
                        <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/googleplay%403x.png" alt="Google Playstore" width="150px" height="50px" style={{ marginRight: "20px" }} />
                        <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/applepay%403x.png" alt="Google Playstore" width="150px" height="50px" />
                    </div>
                </div>
                <div className="banner-image">
                    <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-mobile-app%403x.png" alt="Juno mobile" width="500px" height="700px" />
                </div>
            </div>
            <div className="brands-container">
                <div className="brand-head"><p>BACKED BY THE BEST</p></div>
                <div className="brands-image-container">
                    <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/sequioa-image%403x.png" alt="Brnads" width="200" height="30" />
                    <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/polychain-capital%403x.png" alt="Brnads" width="100" height="30" style={{ marginLeft: "100px", marginRight: "100px" }} />
                    <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/consensys-logo%403x.png" alt="Brnads" width="200" height="30" />
                </div>
            </div>
            <div className="buiseness-goal-container">
                <div className="buiseness-description">
                    <p className="buiseness-header">Start saving for a rainy day fund</p>
                    <p className="business-title">Use Our Checking Account to Achieve Your Financial Goals</p>
                    <p className="cashback-description">With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our partner bank. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.</p>
                </div>
                <div className="buiseness-img-container">
                    <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/juno-apy-215.svg" alt="Cashback" width="500" height="400" />
                </div>
            </div>
            <div className="offer-container">
                <div className="offer-header">
                    <p className="offer-title">Sign up early to save more</p>
                    <p className="offer-description">Depending on the level of your checking account, you’ll earn between 1.15%3 to 2.15%1 bonus rate.</p>
                </div>
                <div className="price-card-container">
                    <div className="card-container">
                        {data.map(d => <Card key={d.id} data={d} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
