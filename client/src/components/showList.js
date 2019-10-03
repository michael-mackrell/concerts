import React,  { useState } from 'react';
import { connect } from 'react-redux';
import { addShow} from '../actions';


import Show from './show';
import ShowDetails from './showDetails';
import { gql } from 'apollo-boost';

import { useQuery } from '@apollo/react-hooks';




const renderList= (listData) => {
    return listData.map((show) => 
        <Show name={show.name} venue={show.venue} date={show.date} id={show._id} time={show.time} details={show.details}></Show>
    ); 
}

 const ShowList = (props) => {

    const SHOW_QUERY = gql`
    {
        concerts {
          name
          details
          date
        }
    }`;

    //hook for the modal
    const [modalOpen, setModalOpen] = useState(false);

    //hook for the apollo query
    const data = useQuery(SHOW_QUERY);
    let listOfConcerts = [];

    if (data.data){
        listOfConcerts = data.data.concerts;
    }
    

    


    let inputBand, inputVenue, inputDate, inputTime, inputDetails;
    return (
        <div >
            <div className="header">
                <h1 className="listH">Concert Tracker</h1>
            </div>

            <div className="mainDiv">

                {modalOpen ? 
                <div>  

                    <div className="transparentBackground"/>  
                    <form autocomplete="off" className="modal" onSubmit={(e) => {
                        e.preventDefault();
                        this.props.addShow(inputBand.value, inputVenue.value, inputDate.value, inputTime.value, inputDetails.value);
                        setModalOpen(false)}
                    }>
                        <input className="band"
                        type="text"
                        name="show"
                        placeholder="Band"
                        ref={node => inputBand = node} />
                        
                        <input className="date"
                        type="date"
                        name="date"
                        placeholder="Date"
                        ref={node => inputDate = node}/>

                        <input className="venue"
                        type="text"
                        name="venue"
                        placeholder="Venue"
                        ref={node => inputVenue = node}/>

                        <input className="time"
                        type="text"
                        name="time"
                        placeholder="Time"
                        ref={node => inputTime = node}/>

                        <input className="details"
                        type="text"
                        name="details"
                        placeholder="Details"
                        ref={node => inputDetails = node}/>

                        <button type="submit" className="addShow"
                        >Add show</button>
                
                    </form>
                </div>   

                :<div></div>}

                <ShowDetails/>

                <div className="showList">
                    <h1>Upcoming Shows</h1>
                    <div className="list">
                        {listOfConcerts.length !== 0 ? renderList(listOfConcerts) : <h3>Loading</h3>}
                    </div>
                </div>

            </div>

            <div className="footer">
                <button onClick={() => setModalOpen(true)} className="newItemButton"><p>+</p></button>
            </div>
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {  };
}

 export default connect(mapStateToProps, {addShow})(ShowList);


// /*shows: getShowsFromGql,
//              selectedShow: state.showData.selected*/
