import React from 'react'
import './order.css'
import insta from '../images/insta.png'
import facebook from '../images/facebook.png'
import email from '../images/email.png'

export default function Order() {
    return (<div><div className="container">
    <h2>Use one of the following channels to place your order. Please provide the product reference number, quantity, and delivery address.</h2>
    </div>
    <div className="icons">
    <div><a target="_blank" href="https://www.instagram.com/wickedywaxmelts/"><img className="icons1" height="100px" src={insta}/></a></div>
    <div><a target="_blank" href="https://fb.me/WickedyWaxMelts"><img className="icons2" height="125px" src={facebook}/></a></div>
    <div><a target="_blank" href="mailto:shannon.bethany@live.co.uk"><img className="icons2" height="100px" src={email}/></a> </div>
    </div>
    <div className="header"><h2>Thank you for choosing Wickedy Wax.</h2></div>
    </div>);
  }