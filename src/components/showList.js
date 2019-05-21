import React from 'react';
import { connect } from 'react-redux';
import { addShow, getShows} from '../actions';


import Show from './show';
import ShowDetails from './showDetails';

class ShowList extends React.Component {

    state = { modalOpen: false };

    renderList() {
        return this.props.shows.map((show) => 
            <Show name={show.showName} venue={show.venue} date={show.date} id={show.showId} time={show.time} id={show.showId}></Show>
        ); 
    }

    render() {
        let inputBand, inputVenue, inputDate, inputTime;

        return (
            <div>
                <div className="header">
                    <h1 className="listH">Concert Tracker</h1>
                </div>

                <div className="mainDiv">

                    {this.state.modalOpen ? 
                    <div>  

                        <div className="transparentBackground"/>  
                        <form autocomplete="off" className="modal" onSubmit={(e) => {
                            e.preventDefault();
                            this.props.addShow(inputBand.value, inputVenue.value, inputDate.value, inputTime.value);
                            this.setState({modalOpen: false})}
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

                            <button type="submit" className="addShow"
                            >Add show</button>
                    
                        </form>
                    </div>   

                    :<div></div>}

                    <ShowDetails/>
  
                    <div className="showList">
                        <h1>Upcoming Shows</h1>
                        <div className="list">
                            {this.renderList()}
                        </div>
                    </div>

                </div>

                <div className="footer">
                    <button onClick={() => this.setState({modalOpen: true})} className="newItemButton"><p>+</p></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { shows: state.showData.showList,
             selectedShow: state.showData.selected };
}

export default connect(mapStateToProps, {addShow, getShows})(ShowList);
