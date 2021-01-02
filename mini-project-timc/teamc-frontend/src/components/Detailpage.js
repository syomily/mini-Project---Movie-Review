import React from 'react'
import { Container } from 'react-bootstrap'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Overview from '../components/Overview';
import '../App.css';
import Characters from '../components/Characters';
import Review from '../components/Review';
import Jumbotron from '../components/Jumbotron';


// import Characters from './components/Characters'
// import Review from './components/Review'

const detailpage = () => {
    
    return (
        <div>
        <Jumbotron/>
        <Container >
        {/* <Col xs lg="4"> */}
        {/* <ListGroup horizontal > */}
{/*         
        <ListGroup.Item active tag="a" href="<Review />" action>Overview</ListGroup.Item>
        <ListGroup.Item  tag="a" href="<Overview />" action>Characters</ListGroup.Item>
        <ListGroup.Item  tag="a" href="" action>Review</ListGroup.Item> */}
        <HashRouter>
        <div>
          <ul className="header">
            <li className="active"><NavLink active tag="a" exact to="/overview">Overview</NavLink></li>
            <li><NavLink to="/characters">Characters</NavLink></li>
            <li><NavLink to="/review">Review</NavLink></li>
          </ul><br/>
          {/* <Nav fill variant="pills" defaultActiveKey="/overview" >
            <Nav.Item>
              <Nav.Link exact to="/overview" href="/overview">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/review" eventKey="link-1">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/review" eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            
          </Nav> */}
          <div className="content">
            <Route exact path="/characters" component={Characters}/>
            <Route active tag="a" exact path="/overview" component={Overview}/>
            <Route exact path="/review" component={Review}/>
          </div>
        </div>
        </HashRouter>
        
        {/* </ListGroup> */}
        {/* </Col> */}
        </Container>
        <br />
        {/* <Overview /> */}
        </div>
        )
    }

export default detailpage