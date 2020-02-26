import React, {Component} from 'react';

import Accordion from '../Accordion/Accordion';
import ITunesService from '../../services/ITunesService';

import './track-list.css';

export default class UsersList extends Component{

    ITunesService = new ITunesService();

    state = {
        tracks : [],
        error : false,
    }

    componentDidMount(){
        this.getTracks();
    }    

    getTracks = (value)=>{
        this.ITunesService.getTracks(value)
        .then(this.onTracksLoaded)
        .catch(this.onError)
    }

    onTracksLoaded = (tracks)=>{
        this.setState({
            tracks : tracks.results,
            error : false,
        });
    }

    onError = ()=>[
        this.setState({
            error : true
        })
    ]

    searchArtist = (e)=>{
        this.getTracks(e.target.value);
    }


    render(){
  
        return(
            <div className="track-list">
                <div className="container">
                    <div className="track-search">
                        Search <input type="text" onBlur={this.searchArtist}/>
                    </div>
                    <div className="navigation">
                        <span className="navigation-title"></span>
                        <span className="navigation-title">Artist</span>
                        <span className="navigation-title">Track</span>
                        <span className="navigation-title">Collection</span>
                        <span className="navigation-title">Genre</span>
                        <span className="navigation-title"></span>
                    </div>
                    <Accordion tracks={this.state.tracks} setTrack={this.setTrack}/>
                </div> 
            </div>  
        )
    }
    
}