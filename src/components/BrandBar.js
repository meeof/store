import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer( () => {
    const {device} = useContext(Context);
    return (
        <Row className={"d-flex"}>
            {device.brands.map(brand =>
                <Card key={brand.id} className={"p-3"}
                      border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                      onClick={() => device.setSelectedBrand(brand)}
                      style={{width: "min-content", height: "min-content", cursor: "pointer"}}>
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;