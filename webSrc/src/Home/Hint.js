import React, { useState } from 'react'

import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import style from "../../style";

import ChatBox from "./ChatBox"
const Hint = (props) => {
    const [ListOfHints] = useState([
        `What are we looking for here`,
        `Connection with signalR hub initialize when the page is loaded`,
        `Display the connection stage in section 1`,
        `Once the hub is in "Connected" stage, display content of section 2`,
        `Once section 2 content loaded, display amount of windows currently open on this page, in the other word: display the amount of connection to the hub`,
        `In the section 2, build an input field which allow user to type in their message`,
        `Build a [Send] button which sends the message in the input field to all other window via signalR`,
        `A display area which displays your own message as Green background, and other's message as blue background`,
        `The display area should display message in real time`,
        `Feel free to change any code`
        
    ])

    return <>
        <Grid item xs={12} style={style.underline}>
            <List dense={true}>
                {
                    ListOfHints.map((hint, i) => {
                        return <ListItem key={`hint:${hint}`}>
                            <ListItemText
                                primary={`${i+1}. ${hint}`}
                            />
                        </ListItem>
                    })
                }
            </List>
        </Grid>
        <Grid item xs={12} style={style.underline}>
            <Typography variant="body1" color="initial">Examples:</Typography>
            <Grid container spacing={1}>
                <Grid item xs={4} >
                    <ChatBox isSelf={true} text="This is your own message" />
                </Grid>
                <Grid item xs={4} >
                    <ChatBox isSelf={false} text="This is other people's message" />
                </Grid>
            </Grid>
        </Grid>
    </>
}
export default Hint;
