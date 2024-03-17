import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer( () => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password);
            }
            else {
                data = await registration(email, password);
                console.log(data);
            }
            user.setUser(user);
            user.setIsAuth(true);
            history(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <Container
            style={{height: `${window.innerHeight - 54}px`,
            display:"flex",
            justifyContent: "center",
            alignItems: "center"}}
        >
            <Card style={{width: "600px"}} className={"p-5"}>
                <h2 className={"m-auto"}>{isLogin ? "Авторизация": "Регистрация"}</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Control className={"mt-3"} onChange={(e) => setEmail(e.target.value)}
                                  placeholder={"Введите ваш email..."} value={email}/>
                    <Form.Control className={"mt-3"} onChange={(e) => setPassword(e.target.value)}
                                  placeholder={"Введите ваш пароль..."} value={password} type={'password'}/>
                    <Container className={"d-flex justify-content-between mt-3 p-0"}>
                        {isLogin ? <div className={"d-flex justify-content-between mt-3 p-0"}>
                                Нет аккаунта ? <NavLink style={{marginLeft: 3, color: "blue"}}
                                                        href={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div className={"d-flex justify-content-between mt-3 p-0"}>
                                Есть аккаунт ? <NavLink style={{marginLeft: 3, color: "blue"}}
                                                        href={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"} onClick={click}
                        >{isLogin ? "Войти" : "Регистрация"}</Button>
                    </Container>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;