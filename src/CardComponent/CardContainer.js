import "../CardComponent/CardComponent.css"
import React from "react"
const CardContainer  = (props) => {

      const { name, id, email} = props.monster
      return (
        
        <div className='card-container' key={id}>
        <img 
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}set=set2`}
        />
        <h2> {name}</h2>
        <p>{email}</p>
      </div>
    )
}
export default CardContainer;


//  CLASSED BASED COMPONENT 


// import React, { Component } from 'react'
// import "../CardComponent/CardComponent.css"
// export default class CardContainer extends Component {
//   render() {
//       const { name, id, email} = this.props.monster
//       return (
        
//         <div className='card-container' key={id}>
//         <img 
//         alt={`monster ${name}`}
//         src={`https://robohash.org/${id}?set=set2`}
//         />
//         <h2> {name}</h2>
//         <p>{email}</p>
//       </div>
//     )
//   }
// }
