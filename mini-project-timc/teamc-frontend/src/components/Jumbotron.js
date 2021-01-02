import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Button } from 'react-bootstrap'
// import '../App.css';
import axios from 'axios'

class jumbotron extends Component {
    constructor(){
        super()
        this.state = {
            movieInfo: []
        }
    }


    componentDidMount(){
        axios.get("http://13.212.139.34:3000/movie/movieInfo/Logan?page=1")
    .then(res => { console.log(res, 'TS3')
        const movieInfo = res.data.movieInfo
        this.setState({
            movieInfo});
    console.log(movieInfo)

    })
    .catch(err => console.log('parsing data is failed, err'))
    }
    render(){
        const{result} = this.state
        console.log(result, 'CH')
        return (
        <div>
        <Jumbotron fluid>
            
            <Container >
           
                      
                          <div key={this.state.movieInfo.Poster}>
                             
                              <h1 className="jumbotron-text">{this.state.movieInfo.Title}</h1>
                <Row>
                <Col xs lg="7">   
                    <p className="jumbotron-text"><strong>
                    {this.state.movieInfo.Plot} </strong></p>
                    </Col> 
                </Row>
                    <p>
                        <Button active tag="a" href={this.state.movieInfo.Trailer} action variant="outline-danger">Watch Trailer</Button> {' '}
                        <Button variant="outline-danger">Add to Watchlist</Button>
                    </p>
                              
                          </div>    
                      
                  
                
            </Container>
        </Jumbotron> 
        </div>
    )}
}

export default jumbotron
