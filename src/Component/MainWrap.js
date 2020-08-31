import React, { Component } from 'react'
import { Row, Col, fluid} from 'react-bootstrap'
import classes from '../Component/MainWrap.module.css'
import StunningTxt from './StunningTxt'
import DesignMenu from './DesignMenu'
import Stunningimg from './Stunningimg'
class MainWrap extends Component {
    render() {
        return (
            <div>
                <Row className={classes.paddingtop}>
    <Col lg={5} sm={12}>
    <StunningTxt/>
    <DesignMenu/>
    </Col>
    <Col lg={7} className="d-none d-lg-block d-sm-none">
        <Stunningimg/>
    </Col>
  </Row>
            </div>
        )
    }
}

export default MainWrap
