// import React, { Component } from 'react';

// import BeautyStars from 'beauty-stars';

// export default class Star extends Component {
//   state = { value: 0 };
//   render() {
//     return (
//       <BeautyStars
//         value={this.state.value}
//         onChange={value => this.setState({ value })}
//       />
//     );
//   }
// }

import React from 'react' ;
// import "./styles.css";
import ReactStars from 'react-rating-stars-component';



// const ratingsStars = {
//     size: 18,
//     count: 10,
//     isHalf: false,
//     value: [],
//     edit: false,
//     emptyIcon: <i className="far fa-star" />,
//     activeColor: "red",
//     onChange: newValue => {
//         console.log(`Example 2: new value is ${newValue}`);
//       }
// };

export default function Star(props) {
    return (
      <div>
        
        {/* <h4>Your own icons with half rating and a11y</h4> */}
        <ReactStars newValue={props.newValue} value={props.value} size={props.size} count={10} edit={props.edit} activeColor={"red"}/>
        
        
      </div>
    );
  }