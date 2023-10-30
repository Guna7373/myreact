import React from "react";
import { Form } from "react-bootstrap";
function Bar() {
    return(
      <div className="Bar" container-fluid>
        <Form className="Form">
        <h1 className="f">Form validation</h1>
        <label className="mail">E-mail:</label>
         <input type="text"/><br/><br/>
         <label className="pass">PassWord:</label>
         <input type="password"/> <br/><br/>
         <label className="num">Number:</label>
         <input type="number"/><br/><br/>
         <input  className="sub" type="submit"/>
        </Form>
      </div>
        
    )
    
}
export default Bar;