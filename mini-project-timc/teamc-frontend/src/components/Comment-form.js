import React from 'react'
import { Container, Media, Form, Button } from 'react-bootstrap'
import Star from '../components/Star'

const commentsForm = () => {
    return (
        <div>
<Form>
                                
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                            
                                   
                                    <Media>
                                    <img
                                       width={64}
                                       height={64}
                                       className="mr-3"
                                       src="https://bulma.io/images/placeholders/64x64.png"
                                       alt="Generic placeholder"
                                   />  
                                   <Media.Body>
                                   <h5>Reviewer</h5>
                                   <Star />  <br/> 
                                   
                                   <Form.Control size="lg" as="textarea" rows={3} placeholder="Leave a Review" /><br/>
                                   <Button as="input" type="submit" value="Submit" className="submit"/>
                                   </Media.Body>
                                   
                                   </Media>
                               </Form.Group>
                       
                               </Form>
        </div>
    )
                        
}

export default commentsForm