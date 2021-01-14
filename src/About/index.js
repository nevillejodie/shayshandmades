import React from 'react'
import vid from '../shayVid.mp4'
import css from '../About/about.module.css'
import Layout from '../components/Layout';
export default function About() {
    return (<>
    <Layout title="About" description="This is the About page" >
    <div className={css.container}>
    <video width="550" height="300" controls autoPlay muted>
    <source src={vid}/>
    </video>
    <p>100% vegan, eco friendly, hand poured wax melts by Wickedy Wax.</p></div></Layout></>);
  }