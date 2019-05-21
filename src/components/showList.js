import React from 'react';
import { connect } from 'react-redux';
import { addShow, getShows } from '../actions';

import Show from './show';

class ShowList extends React.Component {

    state = { song: ''};

    renderList() {
        return this.props.shows.map((show) => 
            <Show name={show.showName} venue={show.venue} date={show.date} id={show.showId}></Show>
        ); 
    }

    
    render() {
        let inputBand, inputVenue, inputDate;
        console.log(this.props.shows);
        return (

            <div className="mainDiv">
                <div className="header">
                    <h1 className="listH">Enter any upcoming shows</h1>
                
                </div>
                    
            
                <div className="showList">
                    
                    <form autocomplete="off" className="cssGridForm" onSubmit={(e) => {
                            e.preventDefault();
                            this.props.addShow(inputBand.value, inputVenue.value, inputDate.value)}
                        }>
                        
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

                        <input className="band"
                        type="text"
                        name="show"
                        placeholder="Band"
                        ref={node => inputBand = node} />
                    
                        <button type="submit" className="defaultButton"
                        >Add show</button>
                    </form>

                
                    {this.renderList()}

                </div>

                

                <div className="footer">
                <button className="newItemButton">+</button>

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { shows: state.listOfShows };
}

export default connect(mapStateToProps, {addShow, getShows})(ShowList);

