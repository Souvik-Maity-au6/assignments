import React from 'react'
import Button from './Button'
const Card = ({ data }) => {
    console.log(data.interest)
    return (
        <div className="card-main">
            <div className="card">
                <div className="card-image">
                    <img src={data.image_url} alt="Juno Black Card" width="250" height="150" />
                </div>
                <div className="card-body">
                    <div className="card-body-top">
                        <div className="card-body-top-text">
                            <p className="card-text-1">{data.type}</p>
                            <div className="card-text-2">
                                <span className="span-1">{data.interest.rate} </span><span className="span-2">{data.interest.no}</span>
                            </div>
                            <div className="card-text-3">
                                <span className="span-3">{data.cashback} </span><span className="span-4">cash back</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-container">
                        <div className="booking-body">
                            <div className="progress-text">
                                <span className="span-5">{data.spots.filled ? data.spots.filled : null}</span><span className="span-6">{data.spots.filled ? "/" : null} {data.spots.total} </span><span className="span-7">spots</span>
                                <span className="span-8">{data.spots.total - data.spots.filled} spots left</span>
                            </div>
                            <div className="progress-bar">
                                <div className="outer-bar">
                                    <div className="inner-bar" style={{ width: `${Math.round((data.spots.filled / data.spots.total) * 100)}%` }}></div>
                                </div>
                            </div>
                            <Button width="300px" height="60px" backgroundColor={data.status === "Sign Up Now" ? "#4643EE" : "#B2B2B2"} color="white" text={data.status} fontSize="20px" />
                        </div>
                        <div className="includes-container">
                            <div className="incudes-header">
                                <h3 className="title">INCLUDES</h3>
                            </div>
                            <div className="includes-offer">
                                {data.includes.map(e => <p className="includes-offer-text"><i className="fas fa-check check-icon"></i>{e}</p>)}
                            </div>
                            <div className="includes-offer-description">
                                <p>{data.description}</p>
                            </div>
                            <div className="card-footer" style={data.status === "Coming Soon" ? { marginTop: "74px" } : { marginTop: "30px" }}>
                                <div className="card-footer-text">
                                    <p className="footer-text-1" style={data.status === "Coming Soon" ? { textDecorationLine: "none" } : { textDecorationLine: "line-through" }}><i className="fas fa-dollar-sign dollar-icon"></i>{data.membership}</p>
                                    <p className="footer-text-2">{data.months}</p>
                                    <p className="footer-text-3" style={data.savings ? { paddingBottom: "15px" } : { paddingBottom: "45px" }}>{data.savings}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
