import Card from '../Card/card'
import Grid from "@material-ui/core/Grid";
import React from 'react'
import one from '../images/one.jpg'
import two from '../images/two.jpg'
import three from '../images/three.jpg'
import four from '../images/four.jpg'
import five from '../images/five.jpg'
import six from '../images/six.jpg'

export default function Browse() {
   

    return (<div styles={'margin-top: 30px'}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Card img={one} typography="1" description="description of item 1"></Card>
          </Grid>
          <Grid item xs>
            <Card img={two} typography="2" description="description of item 2"></Card>
          </Grid>
          <Grid item xs>
            <Card img={three} typography="3" description="description of item 3"></Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs>
            <Card img={four} typography="4" description="description of item 4"></Card>
          </Grid>
          <Grid item xs>
            <Card img={five} typography="5" description="description of item 5"></Card>
          </Grid>
          <Grid item xs>
            <Card img={six} typography="6" description="description of item 6"></Card>
          </Grid>
        </Grid>
      </div>
    );
  }