import Card from '../Card/card'
import Grid from "@material-ui/core/Grid";
import React from 'react'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/1.jpg'
import six from '../images/2.jpg'

export default function Browse() {
   
  const shareUrl = 'http://github.com';
  const title = 'Look at this beaut product from Wickedy Wax!';

    return (<div styles={'margin-top: 30px'}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Card img={one} typography="Dinosaurs" description="Big enough to cut into 2 or 3 pieces! 3x vanilla (gold) 1x avobath (green) 1x snow fairy (pink) 1x comforter (blue)"></Card>
          </Grid>
          <Grid item xs>
            <Card img={two} typography="Lush" description="This ready-made, Lush-inspired mixed box will have you feeling luscious in no time."></Card>
          </Grid>
          <Grid item xs>
            <Card img={three} typography="Spring Clean" description="This ready-made, Spring Clean mixed box will have the place feeling fresh without you lifting a finger."></Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs>
            <Card img={four} typography="Jo Malone" description="This mixed box is inspired by British perfume and scented candle brand Jo Malone, but for a fraction of the price."></Card>
          </Grid>
          <Grid item xs>
            <Card img={five} typography="Vanilla" description="A mixed box of your favourite spice to get your home smelling nice."></Card>
          </Grid>
          <Grid item xs>
            <Card img={six} typography="Fruit Bowl" description="Perfect for a burst of fruity-freshness!"></Card>
            
          </Grid>
        </Grid>
      </div>
    );
  }