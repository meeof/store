import React from 'react';
import {Button, Card, Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import bigStar from "../assets/bigStar.svg";

const DevicePage = () => {
    const device = {
            id: 1,
            name: "12 pro",
            price: 100000,
            rating: 5,
            img: "cf08d475-2904-4e66-ba80-d5406b64bf38.jpg",
            typeId: 2,
            brandId: 2,
        };
    const description = [
        {id: 1, title: 'Оперативная память', description: "5 гб"},
        {id: 2, title: 'Камера', description: "12 мп"},
        {id: 3, title: 'Процессор', description: "Пентиум 3"},
        {id: 4, title: 'Кол-во ядер', description: "2"},
        {id: 5, title: 'Аккумулятор', description: "4000"},
    ]
    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className={"d-flex flex-column align-items-center"}>
                        <h2 style={{width: "min-content", whiteSpace: "nowrap"}}>{device.name}</h2>
                        <div className={"d-flex align-items-center justify-content-center"}
                             style={{background : `url(${bigStar}) no-repeat center center`, width: 240, height: 240,
                                 backgroundSize: "cover", fontSize: 64}}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                    className={"d-flex flex-column align-items-center justify-content-around"}
                    style={{width: 300, height: 300, fontSize: 32, border: "solid 5px lightgray"}}>
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={"d-flex flex-column m-3"}>
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                <Row key={info.id} style={{background: index%2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                    {info.title} : {info.description}
                </Row>)}
            </Row>
        </Container>
    );
};

export default DevicePage;