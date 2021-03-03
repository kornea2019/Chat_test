import React from 'react'

import { Grid } from '@material-ui/core'
import Hint from "./Hint";
import style from "../../style";
import Section1 from './Section1';
import Section2 from './Section2';

const Home = (props) => {


    return <Grid container spacing={1} style={style.fullWidth}>
        <Hint />
        <Section1 />
        <Section2 />
    </Grid>
}

export default Home

