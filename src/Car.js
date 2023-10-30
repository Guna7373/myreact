import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pic1 from './img/menu-item-1.jpg';

function ShapeExample() {
  return (
    <div>
    <Container>
      <Row> 
        <Col xs={6} md={4} className='num1'>
          <Image src={pic1}   rounded />
        </Col>
         <Col xs={6} md={4} className='num1'>
          <Image src={pic1} roundedCircle />
        </Col> 
         <Col xs={6} md={4} className='num1'>
          <Image src={pic1} thumbnail />
        </Col>  
      </Row>
    </Container>
    </div>
  );
}

export default ShapeExample;

// import Breadcrumb from 'react-bootstrap/Breadcrumb';

// function BreadcrumbExample() {
//   return (
//     <Breadcrumb>
//       <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
//       <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
//         Library
//       </Breadcrumb.Item>
//       <Breadcrumb.Item active>Data</Breadcrumb.Item>
//     </Breadcrumb>
//   );
// }

// export default BreadcrumbExample;      





// class Car extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//   return<h1>hi guna {this.props.color}</h1>
// }
// }
// export default Car;


// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h2>I am a {this.props.model}</h2>;
//   }
// }
//  export default Car;

// import React from 'react';

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car! i am good in lang </h2>;
//   }
// }

// export default Car;
// import React from "react";
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 1000)
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}{this.state.color}</h1>
        
       
//       </div>
//     );
//   }
// }
// export default Car;



// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   shouldComponentUpdate() {
//     return false;
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }


// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }


// function Bar(){
//   return (
      
//   );
// }

// export default Bar;
// import { useState } from "react";
// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }
// export default FavoriteColor;


// import { useState } from "react";
// function Fun(){
//   const[color,cb]=useState('red');
//   return(
//     <>
//      <h1>hi hello {color}</h1>
//      <button onClick={()=>cb('blue')}>blue</button>
//     </>
//   )
// }
// export default Fun;

// import { useState } from "react";
// function Fun(){
//   const[color,cb]=useState('red');
//   return (
//     <>
//     <h1>i am guna my favorite color is {color}</h1>
//     <button onClick={()=>cb('guna fav col bluee....')}>submit</button>
//     </>
//   )
// }
// export default Fun;
 
// import { useState } from "react";
// function Fun(){
//   const[about,cb]=useState({
// color:"red",
// brand:"honda"
//   });
//   return(
//     <>
//     <h1>my car color {about.color} and the brand {about.brand} </h1>
//     <button onClick={()=>cb(color:"blue")}>submit</button>
//     <button onClick={()=>cb(brand:"toyoto")}>submit</button>
//     </>
//   )

// }
// export default Fun;

// import { useState } from "react";
// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//     </>
//   )
// }
// export default Car;


// import { useState,useEffect } from "react";

// function Car(){
  // const[count,setcount]=useState(0);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setcount((count)=>count+1)
  //   },1000)
  // },[])
  // return(
  // <h1> time will show {count}</h1>
  // )}

//   const [count, setCount] = useState(0);
//  useEffect(()=>{
//   let timer=setTimeout(()=>{
//     setCount((count)=>count+1);
//   },1000);

// return()=>clearTimeout(timer)
// },[])

// return(
//   <h1>
//     hi hello and start {count}
//   </h1>
// );
// }
//   export default Car;
   




  