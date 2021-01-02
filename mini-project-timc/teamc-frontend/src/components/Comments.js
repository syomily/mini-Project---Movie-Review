import React from 'react'
import { Container, Media, Form, Button } from 'react-bootstrap'
import Star from '../components/Star'
// import { Container } from 'react-bootstrap'

const Reviews = (props) => {
    return (
        <div> 
       
       <Media>
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src={props.Picture}
                                        alt="Reviewer"
                                    />
                                    <Media.Body>
                                        <h5 className="name">{props.Nama}</h5>
                                        <Star value={props.Rating} size={10}/>
                                        <p className="review">{props.Review}</p>
                                    </Media.Body>
                                    </Media> 
        </div> 
    )
}

export default Reviews