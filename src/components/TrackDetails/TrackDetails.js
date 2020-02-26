import React, {Component} from  'react';

import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default class TrackDetails extends Component{

    state = {
        track : {},
    } 
    
    componentDidMount(){
        this.setState({
            track : this.props.track,
        })
    }

    render(){
        const {trackTimeMillis, artistName, trackName, collectionName, trackPrice, trackCount, collectionPrice, previewUrl} = this.state.track;

        const detailsTitle = artistName + ' - ' + trackName;

        return(
                <div className="track-details">
                    <div className="details-header">
                        <h3>{detailsTitle}</h3>
                        <FontAwesomeIcon icon={faMusic} />
                    </div>
                    <div className="details-info">                
                        <div className="details-col">
                            <div className="details-item">
                                <span className="details-title">Collection </span>
                                <span>{collectionName}</span> 
                            </div>
                            <div className="details-item">
                                <span className="details-title">Track Count </span>
                                <span>{trackCount}</span> 
                            </div>
                            <div className="details-item">
                                <span className="details-title">Price </span>
                                <span>{collectionPrice}</span> 
                                <span> USD</span> 
                            </div>
                        </div>
                        <div className="details-col">
                            <div className="details-item">
                                <span className="details-title">Track Duration </span>
                                <Moment format="mm:ss">
                                    {trackTimeMillis}
                                </Moment>
                                <span> min</span>
                            </div>
                            <div className="details-item">
                                <span className="details-title">Track Price </span>
                                <span>{trackPrice}</span> 
                                <span> USD</span> 
                            </div>
                        </div>
                        <div className="details-col">
                            <div className="details-item">
                                <audio controls>
                                    <source src={previewUrl}/>
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>  
            
        )
    }
}
