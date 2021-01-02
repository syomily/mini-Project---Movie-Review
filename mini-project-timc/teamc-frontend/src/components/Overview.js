import React, {Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Synopsis from '../components/Synopsis';
import Movieinfo from '../components/Movieinfo';

import axios from 'axios'

class Overview extends Component {
    constructor(){
        super()
        this.state = {
            movieInfo: [],

          isLoaded: false,
        }
    }


    componentDidMount(){
        axios.get("http://13.212.139.34:3000/movie/movieInfo/Logan?page=1")
    .then(res => { console.log(res, 'TS3')
        const movieInfo = res.data.movieInfo
        this.setState({
            movieInfo, isLoaded: true});
    console.log(movieInfo)

    })
    .catch(err => console.log('parsing data is failed, err'))
    }
        
    render() { 

        const {isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
            <div>
            
            <Fragment>
             
       
            <Container>
               
                
                    <div>
                    <h4>Synopsis<hr/></h4>
                    <Synopsis key={this.state.movieInfo.Director} Plot={this.state.movieInfo.Plot} />
                    <br/>
                    <h4>Movie Info<hr/></h4>
                    <Movieinfo 
                    Released={this.state.movieInfo.Released} 
                    Runtime={this.state.movieInfo.Runtime} 
                    Director={this.state.movieInfo.Director} 
                    Writer={this.state.movieInfo.Writer} 
                    Genre={this.state.movieInfo.Genre} 
                    Language={this.state.movieInfo.Language}
                    Country={this.state.movieInfo.Country}/>
                    </div>
                    
                     
               
            </Container>
            
            
            </Fragment>
            </div>
       
            
            )
         
        
       
         
            
    }}}

export default Overview

// import React, { Component, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import {  Container, } from 'react-bootstrap'

// // bring connect from react-redux, it's the bridge for connecting component to redux
// import { provider, connect } from 'react-redux'

// // bring the actions, just bring that have REQUESTED in the suffix
// // If you dispatching that doesn't have REQUESTED, it will not work
// import {
//   GET_MOVIEINFO_REQUESTED
// } from '../Redux/Action/movie-action'

// // Components
// import Movieinfo from '../components/Movieinfo'
// import Synopsis from '../components/Synopsis'

// const Overview = ({
// 	overview: { loading, overviews },
// 	getOverview
// }) => {
// 	useEffect(() => {
// 		getOverview()

// 		// eslint-disable-next-line
// 	}, [])

// 	return (
// 		// <Fragment>
//         <> 
       
//          <Container >
//          <h4>Synopsis<hr/></h4>
			
// 			{loading && 'Loading...'}

// 			{overviews && overviews.map((overview, index) => (
// 				<Movieinfo overview={overview} key={index} />

// 			))}
//             <br/>
//          <h4>Movie Info<hr/></h4>
//             {overviews && overviews.map((overview, index) => (
// 				<Synopsis overview={overview} key={index} />

// 			))}
//         </Container>
// 		</>
//         // </Fragment>
// 	)
// }

// Overview.propTypes = {
// 	loading: PropTypes.bool,
// 	overviews: PropTypes.array,
// 	getOverview: PropTypes.func.isRequired
// }

// // Get state to props
// const mapStateToProps = (state) => ({
//     overview: state.overview
// })

// // Get dispatch / function to props
// const mapDispatchToProps = (dispatch) => ({
//     getOverview: () => dispatch({ type: GET_MOVIEINFO_REQUESTED })
// })

// // To make those two function works register it using connect
// export default connect(mapStateToProps, mapDispatchToProps)(Overview)

