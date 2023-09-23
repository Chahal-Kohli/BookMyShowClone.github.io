import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React from 'react';
function Footer() {
    return (
        <div>
            <Container fluid>
                <Row style={{ background: "black", padding: "2%", color: "white" }}>
                    <Col sm={3}>Col 1</Col>
                    <Col sm={3}>Col 2</Col>
                    <Col sm={6} style={{textAlign:"right"}}>
                        <button style={{ background: "red", color: "white", borderRadius: "10px", padding: "8px", fontSize: "20px" }}>Contact today!</button>
                    </Col>
                </Row>

                <Row style={{ background: "darkgrey", padding: "2%", color: "white" }}>
                    <Col sm={{offset:1,span:2}}>Col1</Col>
                    <Col sm={{span:4}}>Col2 </Col>
                    <Col sm={{span:5}}>Col3</Col>
                </Row>
            </Container>
        </div>
    );

}
export default Footer;