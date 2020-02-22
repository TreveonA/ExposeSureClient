import React, {useState} from "react"
import Login from "./login"
import Signup from "./signup"
import {Container, Row, Button, Modal, ModalHeader, Form, Label, Input} from 'reactstrap'

export function Auth(props){
    const [showLogin, setShowLogin] = useState(true)
    const [buttonName, setButtonName] = useState("To Signup")

    function toggleView(){
        if (showLogin === true){
            setShowLogin(false)
            setButtonName("To Login")
        }else {
            setShowLogin(true)
            setButtonName('To Signup')
        }
    }


    return(
        <Container>
        <Row>{showLogin ? <Login updateToken = {props.updateToken}/> : <Signup updateToken = {props.updateToken} />}</Row>
        <br></br>
        <Button onClick={toggleView}>{buttonName}</Button>
        </Container>
    )
    
}

export default Auth