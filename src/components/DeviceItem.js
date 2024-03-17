import React from 'react';
import Col from "react-bootstrap/Col";
import {Card, Image} from "react-bootstrap";
import star from "../assets/star.svg";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useNavigate();
    return (
        <Col>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"} className={"mt-3"}
                  onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
                <Image src={device.img} width={150} height={150}/>
                <div className={"d-flex justify-content-between align-items-center mt-1 text-black-50"}>
                    <div>Samsung...</div>
                    <div className={"d-flex align-items-center"}>
                        <div>{device.rating}</div>
                        <Image src={star} width={18} height={18}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;