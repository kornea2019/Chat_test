import React, { useState } from 'react'
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import style from '../../style'

const Section2 = (props) => {

    const [NumberOfConnection, setNumberOfConnection] = useState(-1)


    return <Grid item xs={12}>
        <Typography variant="h6" color="initial">
            Section 2:
        </Typography>

    </Grid>
}


export default Section2
