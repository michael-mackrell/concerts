import React from 'react';
import { connect } from 'react-redux';
import { addShow, getShows, deleteShow, updateShow } from '../actions';
import musicNote from "../images/music.png";
import edit from "../images/edit1.png";
import trash from "../images/delete.png";
import check from "../images/check.png";

class ShowDetails extends React.Component{

    state = {editable: false};

    render() {

        let selectedConcert = this.props.selectedShow;
        let editBand, editVenue, editDate, editTime, editDetails
        return (
            <div className="details">
                <h1>Show Details</h1>

                {this.props.selectedShow !== null ? 

                    <div className="extraShowDetails"> 
                        <div><img className="imgMusic" src={musicNote} alt="Music Icon" /> </div>

                        {this.state.editable === true ? 
                            <div>
                                <h1><input defaultValue={selectedConcert.name} ref={node => editBand = node}/></h1>
                                <h3><span><input defaultValue={selectedConcert.date} ref={node => editDate = node}/></span></h3>
                                <h3><span><input defaultValue={selectedConcert.time} ref={node => editTime = node}/></span>   </h3>
                                <h3><span><input defaultValue={selectedConcert.venue} ref={node => editVenue = node}/></span>   </h3>
                                <h3><span><input defaultValue={selectedConcert.details} ref={node => editDetails = node}/></span>   </h3>
                                <br/>

                                <img className="imgIcon" onClick={() => {this.props.updateShow(editBand.value, editDate.value, editTime.value, editVenue.value, editDetails.value, selectedConcert._id); 
                                                                        this.setState({editable:false});}} src={check} alt="Check Icon" /> 
                            </div>
                        :
                            <div className="detailsActions">
                                <h1>{selectedConcert.name}</h1>
                                <h3><span>{this.props.selectedShow.date}</span>   </h3>
                                <h3><span>{this.props.selectedShow.time}</span>   </h3>
                                <h3><span>{this.props.selectedShow.venue}</span>   </h3>
                                <h3><span>Details</span></h3><br/><span>{this.props.selectedShow.details}</span>   
                            
                                <br/>
                        
                                <img className="imgIcon" onClick={() => this.setState({editable:true})} src={edit} alt="Edit Icon" /> 
                                <img className="imgIcon" onClick={() => {this.props.deleteShow(this.props.selectedShow._id)}} src={trash} alt="Trash Icon" />
                            </div>
                        }
                    </div>
                : 
                    <h4>No show selected</h4>}     
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { shows: state.showData.showList,
             selectedShow: state.showData.selected };
}

export default connect(mapStateToProps, {addShow, getShows, deleteShow, updateShow})(ShowDetails);