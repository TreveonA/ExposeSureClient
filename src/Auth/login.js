import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import APIURL from '../helpers/environment'

function Login(props) {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(`${APIURL}/api/user/signin`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    user: {
                        username: username, 
                        password: password
                    }
                }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(response => response.json())
        .then(user => props.updateToken(user.sessionToken))
    }
    return (
        <div>
            <h3>Login</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    
                    <Label htmlFor="username">Username</Label>
                    <Input 
                    // onChange={(e) => {setUsername(e.target.value)}} placeholder="username" name="username" value={username} />
                    minLength="6"
                    onChange={e => setUsername(e.target.value)}
                    name="email"
                    placeholder="email@email.com"
                    type="email"
                    id="email" />
                   
                </FormGroup>
                <FormGroup>
                    
                    <Label htmlFor="password" >Password</Label>
                    <Input
                    // onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="password" name="password" value={password} />
                    minLength="8"
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    placeholder="password"
                    type="password"
                    id="password"/> 
                          
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}
export default Login