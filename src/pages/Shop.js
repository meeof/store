import React from 'react';
import {Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container>
            <Row style={{display: "grid", gridTemplateColumns: "1fr 3fr"}}>
                <Col className="d-flex justify-content-between mt-3 ps-3 pe-3">
                    <TypeBar/>
                </Col>
                <Col className="d-flex mt-3 ps-3 pe-3"
                     style={{flexDirection: "column", justifyContent: "flex-start"}}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;