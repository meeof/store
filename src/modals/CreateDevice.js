import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Dropdown, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import {set} from "mobx";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle className={"mt-2 mb-2"}>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle className={"mt-2 mb-2"}>Выберите бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand => <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control placeholder={"Введите название устройства"} className={"mt-3"}></Form.Control>
                    <Form.Control placeholder={"Введите стоимость устройства"} className={"mt-3"} type={"number"}></Form.Control>
                    <Form.Control className={"mt-3"} type={"file"}></Form.Control>
                    <hr/>
                    <Button variant={"outline-dark"} onClick={addInfo}
                    >Добавить новое свойство</Button>
                    {
                        info.map(i =>
                            <Row className={'mt-4'} key={i.number}>
                                <Col md={4}>
                                    <Form.Control placeholder={'Введите название свойства'}/>
                                </Col>
                                <Col md={4}>
                                    <Form.Control placeholder={'Введите описание свойства'}/>
                                </Col>
                                <Col md={4}>
                                    <Button variant={"outline-danger"}
                                            onClick={() => removeInfo(i.number)}>Удалить</Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;