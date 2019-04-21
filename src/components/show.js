import React from 'react';
import './componentStyles.scss';
import { connect } from 'react-redux';
import { deleteShow } from '../actions';


const Show = (props) => {
    return (

    
    <div className="container">
<div className="showDiv">
        
        <div className="showName">
            <h1>{props.name}</h1>
        </div>

        <div className="showDetails">
            <h3>Date: {props.date}</h3>
            <h3>Venue: {props.venue}</h3>
        </div>

<div className="magicDiv">
            <button onClick={() => {props.deleteShow(props.id)}} className="deleteButton">Delete show</button>
        </div>
         
    </div>

    

    

    </div>
  
        
       

    

   
    )
        
}

// const mapStateToProps = (state) => {
//     return {

//     }

// }

export default connect(null, {deleteShow})(Show);