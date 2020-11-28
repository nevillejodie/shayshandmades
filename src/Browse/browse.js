import Card from '../Card/card'
import Grid from "@material-ui/core/Grid";
import React from 'react'
import css from './browse.css'

export default function Browse() {
   

    return (<div styles={'margin-top: 30px'}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Card typography="1" description="description of item 1"></Card>
          </Grid>
          <Grid item xs>
            <Card typography="2" description="description of item 1"></Card>
          </Grid>
          <Grid item xs>
            <Card typography="3" description="description of item 1"></Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs>
            <Card typography="4" description="description of item 4"></Card>
          </Grid>
          <Grid item xs>
            <Card typography="5" description="description of item 5"></Card>
          </Grid>
          <Grid item xs>
            <Card typography="6" description="description of item 6"></Card>
          </Grid>
        </Grid>
      </div>
    );
  }