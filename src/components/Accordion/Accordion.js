import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Track from '../Track/Track';
import TrackDetails from '../TrackDetails/TrackDetails';

import '../TrackList/track-list.css';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
}));

export default function ControlledExpansionPanels(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);  
    
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderItem = (arr) => {
        return arr.map((item,i) => {  

            const addStyle = i%2 ? '' : 'add-style'; 

            return(                
                <div className={classes.root} key={item.trackId} >
                    <ExpansionPanel 
                    className={addStyle}
                    expanded={expanded === `panel${i}`} 
                    onChange={handleChange(`panel${i}`)} 
                    >
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${i}-bh-content`}
                        id={`panel${i}-bh-header`}
                        >
                            <Track
                                track = {item}
                            />
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <TrackDetails track={item}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            )
        })
    }

    const item = renderItem(props.tracks);  

    return (
        <div className={classes.root}>
                  {item}
        </div>
    );

}