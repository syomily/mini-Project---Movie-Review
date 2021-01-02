import React, { Component, Fragment } from 'react';
import { Card, CardColumns, Container, CardDeck } from 'react-bootstrap';
// import { data } from '../components/database';
// import '../App.css'; 
// import React, { Component } from 'react';
import axios from 'axios'



    class characters extends Component {
      constructor(){
          super()
          this.state = {
            result: []
          }
      }
  
  
      componentDidMount(){
          axios.get("http://13.212.139.34:3000/movie/characters")
      .then(res => { console.log(res, 'TS2')
          const result = res.data.result
          this.setState({result});
      })
      .catch(err => console.log('parsing data is failed, err'))
  
      }
    // componentDidMount(){
    //     axios.get("https://api.github.com/users/syomily/repos")
    //     .then(res => {
    //         const items = res.data
    //         this.setState({items});
    //     })
    //     .catch(err => console.log('parsing data is failed, err'))
    // }

    render(){
        const{result} = this.state
        console.log(result, 'CH')
        return(
            <Container>
              <h4>Characters<hr/></h4>

            <CardDeck >
            <CardColumns>
              <Fragment>

                  {result ? result.map(item => {
                    const { Picture} = result 
                      return (
                          <div key={Picture} className="kotak mb-4">
                              
                              <Card className='kotakecil mr-2'>
                                  <Card.Img width={200} height={300} variant="top" src={item.Picture}/>
                                  <Card.Body>
                                      <Card.Title>{item.Nama}</Card.Title>
                                      
                                  </Card.Body>               
                              </Card>
                              
                          </div>    
                      )
                  }) : null}
              </Fragment>
            </CardColumns> 
            </CardDeck> 
            </Container> 
        )    
    }
}
export default characters;



