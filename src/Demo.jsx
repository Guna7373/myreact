import {FaFacebook} from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import pic1 from './img/antique-cafe-bg-04.jpg';
import  Navbar  from 'react-bootstrap/Navbar';
import  Form from 'react-bootstrap/Form';
import  InputGroup from 'react-bootstrap/InputGroup'; 
import  Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Demo(){
    return(
        <div className="num1">
            <h1>CAFE `90`</h1>
            <div className="num2">
        <h1><FaFacebook /> OVERVIEW OF SHOP</h1>
        <Navbar  className="name justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
      </div>
      <div className="num3">
     <Card className='demo1' style={{ width: '18rem' }}>
      <Card.Img  src={pic1} />
      <Card.Body>
        <Card.Title>Some Coffee Brands</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          $ 20 D;
          $ 35 D
        </Card.Text>
      </Card.Body>
    </Card>
    
        </div>
        </div>
        
    );
}
export default Demo;


// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './img/antique-cafe-bg-01.jpg';
// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text={ExampleCarouselImage} />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text={ExampleCarouselImage}/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text={ExampleCarouselImage} />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;