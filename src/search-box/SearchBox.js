import './search-box.style.css'
const SearchBox  = (props) => {
   const {className, placeholder , onChangeHandler} = props
    return (
        <input
        className={`search-box ${className}`}
        type={"search"}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    )
  
}
export default SearchBox;
// Classs Based Component 


// import React, { Component } from 'react'
// import './search-box.style.css'
// export default class SearchBox extends Component {
//   render() {
   
//     return (
//         <input
//         className={`search-box ${className}`}
//         type={"search"}
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     )
//   }
// }
