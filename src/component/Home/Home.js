import React from 'react';
import {Alert} from 'reactstrap';
 export const HOME_TITLE = "This is Homeapp.js" ;
 const Home = (props)=>{
    return (
        <div className="data">
            <h1>{props.title?props.title:HOME_TITLE}</h1>
            <Alert color='danger'> {HOME_TITLE} </Alert>
            <Alert color='success'> {HOME_TITLE} </Alert>
        </div>
    )
}




export default Home;

 /* named function -
    function testapp(){
        code 
    }

    anonymous
    function(){
        code comes 
    }

    self invoking

    (function(){

    })()

    imediate function (changed to self invoked )
     function testdata(){
         code comes
     }
     testdata();

     es6
     const data = () => {
        code 
    }

 */


