// import React , { useEffect, useState } from 'react'
// import { useSelector, useDiptach } from 'react-redux'
import { Carousel } from "react-bootstrap";
import React, { Component } from "react";
import axios from "axios";
// import { data } from './database'

class CarouselHM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://13.212.139.34:3000/home/carouselImages")
      .then((res) => {
        console.log(res, "TS1");
        const result = res.data.result;
        this.setState({ result });
      })
      .catch((err) => console.log("parsing data is failed, err"));
  }

  render() {
    const { result } = this.state;
    console.log(result, "CR");
    return (
      <div className="container justify-content-center Banner d-flex pb-5"> 
      {/* <div> */}
        <Carousel>
          {result
            ? result.map((item) => {
                // const { Poster, Title } = result;
                return (
                  // <React.Fragment>
                    <Carousel.Item>
                      <img
                       className="d-block w-100"
                        src={item.Poster}
                        height="500vh"
                        alt="carousel"
                        // width="auto"
                        
                        // alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>{item.Title}</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  // </React.Fragment>
                );
              })
            : null}
        </Carousel>
      </div>
    );
  }
}

export default CarouselHM;

// import React from 'react';
// import CarouselCaption from '@bit/reactstrap.reactstrap.internal.carousel-caption';
// import CarouselItem from '@bit/reactstrap.reactstrap.internal.carousel-item';
// import CarouselControl from '@bit/reactstrap.reactstrap.internal.carousel-control';
// import CarouselIndicators from '@bit/reactstrap.reactstrap.internal.carousel-indicators';
// import Carousel from '@bit/reactstrap.reactstrap.carousel';

// // const items = [
// // 	{
// // 		src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
// // 		altText: 'Slide 1',
// // 		caption: 'Slide 1'
// // 	},
// // 	{
// // 		src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
// // 		altText: 'Slide 2',
// // 		caption: 'Slide 2'
// // 	},
// // 	{
// // 		src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
// // 		altText: 'Slide 3',
// // 		caption: 'Slide 3'
// // 	}
// // ];

// class Example extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = { activeIndex: 0 };
// 		this.next = this.next.bind(this);
// 		this.previous = this.previous.bind(this);
// 		this.goToIndex = this.goToIndex.bind(this);
// 		this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//     result: []
// 	}

// 	onExiting() {
// 		this.animating = true;
// 	}

// 	onExited() {
// 		this.animating = false;
// 	}

// 	next() {
// 		if (this.animating) return;
// 		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
// 		this.setState({ activeIndex: nextIndex });
// 	}

// 	previous() {
// 		if (this.animating) return;
// 		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
// 		this.setState({ activeIndex: nextIndex });
// 	}

// 	goToIndex(newIndex) {
// 		if (this.animating) return;
// 		this.setState({ activeIndex: newIndex });
// 	}

// 	render() {
// 		const { activeIndex } = this.state;

// 		const slides = items.map((item) => {
// 			return (
// 				<CarouselItem
// 					onExiting={this.onExiting}
// 					onExited={this.onExited}
// 					key={item.src}
// 				>
// 					<img src={item.src} alt={item.altText} />
// 					<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
// 				</CarouselItem>
// 			);
// 		});

// 		return (
// 			<div>
// 				<link
// 					rel='stylesheet'
// 					href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
// 				/>
// 				<Carousel
// 					activeIndex={activeIndex}
// 					next={this.next}
// 					previous={this.previous}
// 				>
// 					<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
// 					{slides}
// 					<CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
// 					<CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
// 				</Carousel>
// 			</div>
// 		);
// 	}
// }

// export default <Example />;


                //  {/* <Carousel.Item>
                //               <img
                //                 className="d-block w-100"
                //                 src={item.Poster}
                //                 // alt="First slide"
                //               />
                //               <Carousel.Caption>
                //                 <h3>{item.Title}</h3>
                //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                //               </Carousel.Caption>
                //             </Carousel.Item>
                //             <Carousel.Item>
                //               <img
                //                 className="d-block w-100"
                //                 src={item.Poster}
                //                 // alt="First slide"
                //               />
                //               <Carousel.Caption>
                //                 <h3>{item.Title}</h3>
                //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                //               </Carousel.Caption>
                //             </Carousel.Item> */}