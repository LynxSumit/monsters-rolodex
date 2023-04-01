import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./card-list/CardList";
import SearchBox from "./search-box/SearchBox";
const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [updatedList , setUpdatedList] = useState(monsters)
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users)=>{
    setMonsters(users)
    
  })
}, [])

useEffect(()=>{
  let NewupdatedList = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchString);
  });
  console.log("Effect is firing")
  setUpdatedList(NewupdatedList)
}, [monsters, searchString])
  
  const onSearchChange = (event) => {
    const query = event.target.value.toLocaleLowerCase();
    setSearchString(query);
  };
 

  return (
    <div className="App">
      <h1 className="Title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />

      <CardList monsters={updatedList} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return {
//             monsters: users,
//             query : ""
//           };
//         })
//       );
//   }
//    onSearchChange
//   render() {
//     const { monsters, query} = this.state

//
//     return (
//
//     );
//   }
// }

export default App;

// import "./App.css";
// import { Component } from "react";
// import CardList from "./card-list/CardList";
// import SearchBox from "./search-box/SearchBox";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return {
//             monsters: users,
//             query : ""
//           };
//         })
//       );
//   }
//    onSearchChange = (event) => {
//     const query = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { query };
//     });
//   }
//   render() {
//     const { monsters, query} = this.state

//     let updatedList = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(query);
//     });
//     return (
//       <div className="App">
//       <h1 className="Title">Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={this.onSearchChange} placeholder="search monsters" className="monsters-search-box"/>

//        <CardList monsters={updatedList}/>
//       </div>
//     );
//   }
// }

// export default App;
