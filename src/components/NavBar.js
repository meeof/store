import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink style={{color: "white"}} href={SHOP_ROUTE}>КупиДевайс</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: "white"}}>
                            <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
                            <Button variant={"outline-light"} style={{marginLeft: "2px"}}
                                    onClick={logOut}>Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: "white"}}>
                            <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>
                                Авторизация
                            </Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </div>
    );
});

export default NavBar;