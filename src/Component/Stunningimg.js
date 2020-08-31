import React from 'react'
import { Row, Col, fluid} from 'react-bootstrap'
import landingsectionimg from '../images/landing-section-image.png'
import Image from 'react-bootstrap/Image'
function Stunningimg() {
    return (
        <div>
            <Col>
                <Image src={landingsectionimg} fluid />  
                </Col>
        </div>
    )
}

export default Stunningimg
