import React from 'react';
import './componentStyles.scss';
import { connect } from 'react-redux';
import { deleteShow, selectSpecificShow } from '../actions';


const Show = (props) => {
console.log(props)
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',];
    const splitDate = props.date.split('-');
    const parsedDateNumber = splitDate[2];
    const dateMonth = monthNames[splitDate[1].substring(0) - 1];

    return (

    <div  className="showDiv">
        <div className="sidebar"/>
        <div className="showDate">
            
            <h1>{parsedDateNumber}</h1>
            <h4>{dateMonth}</h4>
        </div>


        <div onClick={() => {props.selectSpecificShow(props.id)}} className="showDetails">
            <h1>{props.name}</h1>
            <h3>Venue: {props.venue}</h3>
            <h3>Time: {props.time}</h3>
        </div>

 
         
    </div>
 
    )
        
}

// const mapStateToProps = (state) => {
//     return { shows: state.listOfShows };
// }

export default connect(null, {deleteShow, selectSpecificShow})(Show);


