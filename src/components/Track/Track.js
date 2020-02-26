import React, {Component} from  'react';
import './track.css';

export default class Track extends Component{

    state = {
        track : {},
    } 
    
    componentDidMount(){
        this.setState({
            track : this.props.track,
        })
    }

    render(){

        const {artworkUrl60, artistName, trackName, collectionName, primaryGenreName} = this.state.track;
        const {addStyle} = this.props;
        const addClass = addStyle ? 'track-wrapper add-style' : 'track-wrapper';

        return(
            <div className="track-row">
                <div className={addClass}>
                    <div className="track-header" >
                        <div className="image">
                            <img src={artworkUrl60} alt="" />
                        </div>
                        <div className="artist-name">{artistName}</div>
                        <div className="track-name">{trackName}</div>
                        <div className="collection-name">{collectionName}</div>
                        <div className="genre">{primaryGenreName}</div>
                    </div>
                </div>                  
            </div>
            
        )
    }
}
