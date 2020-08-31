import React, { Component } from 'react'
import lgHidden from 'react-bootstrap'
import classes from '../Component/StunningTxt.module.css'
import arowdown from '../images/arrow-down.png'
import arowup from '../images/arrow-up.png'
import landingsection from '../images/landing-section-image.png'
import Image from 'react-bootstrap/Image'
import { fluid, Col} from 'react-bootstrap'
class StunningTxt extends Component {
    render() {
        return (
            <div>
                <h1 className={classes.stuntxt}>Stunning Workplace<span className={classes.dot}></span></h1>
                <p className={classes.stuntxtp}>With stunning, remote teams can organize projects, manage shifiting priorities, andgetwork done.</p>
                <div className={classes.btnwrap}>
                 <span className={classes.newaccount}>New Account</span>   
                 <span className={classes.spc}><img src={arowup}/></span>   
                 <span><img src={arowdown}/></span>   
                </div>

                <Col className="d-lg-none d-sm-block d-xs-block">
                <Image src={landingsection} fluid  className={classes.margtbot}/>  
                </Col>
            </div>
        )
    }
}

export default StunningTxt
