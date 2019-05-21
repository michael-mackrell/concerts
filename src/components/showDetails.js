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
        let editBand, editVenue, editDate, editTime;

        return (
            <div className="details">
                <h1>Show Details</h1>

                {this.props.selectedShow !== null ? 

                    <div className="extraShowDetails"> 
                        <div><img className="imgMusic" src={musicNote} alt="Music Icon" /> </div>

                        {this.state.editable === true ? 
                            <div>
                                <h1><input defaultValue={selectedConcert.showName} ref={node => editBand = node}/></h1>
                                <h3><span><input defaultValue={selectedConcert.date} ref={node => editDate = node}/></span></h3>
                                <h3><span><input defaultValue={selectedConcert.time} ref={node => editTime = node}/></span>   </h3>
                                <h3><span><input defaultValue={selectedConcert.venue} ref={node => editVenue = node}/></span>   </h3>
                                <h3><span>Details</span></h3><br/><span>In here I will put an excessive amount of text because there needs to be some room for details like who and what and carpool and stuff like that ya know</span>   
                                <br/>

                                <img className="imgIcon" onClick={() => {this.props.updateShow(editBand.value, editDate.value, editTime.value, editVenue.value, selectedConcert.showId); 
                                                                        this.setState({editable:false});}} src={check} alt="Check Icon" /> 
                            </div>
                        :
                            <div>
                                <h1>{selectedConcert.showName}</h1>
                                <h3><span>{this.props.selectedShow.date}</span>   </h3>
                                <h3><span>{this.props.selectedShow.time}</span>   </h3>
                                <h3><span>{this.props.selectedShow.venue}</span>   </h3>
                                <h3><span>Details</span></h3><br/><span>In here I will put an excessive amount of text because there needs to be some room for details like who and what and carpool and stuff like that ya know</span>   
                            
                                <br/>
                        
                                <img className="imgIcon" onClick={() => this.setState({editable:true})} src={edit} alt="Edit Icon" /> 
                                <img className="imgIcon" onClick={() => {this.props.deleteShow(this.props.selectedShow.showId)}} src={trash} alt="Trash Icon" />
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