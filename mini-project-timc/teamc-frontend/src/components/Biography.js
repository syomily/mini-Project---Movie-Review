import React, { Component, Fragment } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
// import { data } from '../components/database';
import { Link } from 'react-router-dom';
import axios from 'axios';



class CardBD extends Component {
    constructor(){
        super()
        this.state = {
            results : []
        }
    }


    componentDidMount(){
        axios.get("http://13.212.139.34:3000/category/biography?page=1")
    .then(res => { console.log(res, 'TS')
        const results = res.data.results
        this.setState({results});
    })
    .catch(err => console.log('parsing data is failed, err'))

    }
    
    render(){
        const{results} = this.state
        console.log(results, 'CD')
        return(
            <CardColumns>
            <Fragment>
                {results?  results.map(item => {
                    const { Poster} = results
                    return (
                        // <HashRouter>
                        <div key={Poster} className="kotak  mb-4">
                            <Card className='kotakecil mr-2'> 
                                <Card.Img width="50" variant="top" src={item.Poster} />
                                <Card.Body>
                                    <Link to="/detailpage">
                                        <Card.Title>{item.Title}</Card.Title>
                                    </Link>
                                    <Card.Text>{item.Genre}</Card.Text>
                                </Card.Body>               
                            </Card>
                        </div>
                        
                        // </HashRouter>    
                    )
                } ):null}
                
            </Fragment>
            </CardColumns>   
        )    
    }
}

export default CardBD;



