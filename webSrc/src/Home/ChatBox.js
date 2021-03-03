import React from 'react'
import style from '../../style'
import { Grid } from '@material-ui/core'

const ChatBox = (props) => {
    const background = props.isSelf ? style.greenBackground : style.blueBackground;

    return <Grid item xs style={{ ...style.fullWidth, ...style.roundCorner, ...style.border1, ...background }}>
        {props.text}
    </Grid>
}

export default ChatBox;