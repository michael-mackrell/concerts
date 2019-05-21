import React from 'react';
import './componentStyles.scss';
import { connect } from 'react-redux';
import { deleteShow } from '../actions';


const Show = (props) => {

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',];

    const splitDate = props.date.split('-');
    const parsedDateNumber = splitDate[2];
    const dateMonth = monthNames[splitDate[1].substring(1) - 1];

    return (

    <div className="showDiv">
        
        <div className="showDate">
            <div className="sidebar"/>
            <h1>{parsedDateNumber}</h1>
            <h4>{dateMonth}</h4>
        </div>


        <div className="showDetails">
            <h1>{props.name}</h1>
            <h3>Venue: {props.venue}</h3>
            <h3>Time: {props.time}</h3>
        </div>

 
            
            

        

         
    </div>
 
    )
        
}

export default connect(null, {deleteShow})(Show);


//<button className="tallButton deleteButton" onClick={() => {props.deleteShow(props.id)}} className="deleteButton">Delete show</button>