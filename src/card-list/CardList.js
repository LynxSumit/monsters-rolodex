import './card-list.style.css'
import CardContainer from '../CardComponent/CardContainer'
const CardList = ({monsters})=> 
      <div className='card-list'>
    {monsters.map((monster)=>
      { 
        return (
      <CardContainer key={monster.id} monster={monster}/>
      )})
    }
   </div>
export default CardList



// class based


// import React, { Component } from 'react'
// import './card-list.style.css'
// import CardContainer from '../CardComponent/CardContainer'
//  class CardList extends Component {
//   render() {

//       const { monsters } = this.props

//     return (
//       <div className='card-list'>
//     {monsters.map((monster)=>
//       { 
//         return (
//       <CardContainer key={monster.id} monster={monster}/>
//       )})
//     }
//    </div>
//   )
//   }
// }
// export default CardList