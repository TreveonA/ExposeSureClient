import React, {useState} from 'react'
// import './signup.css'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment'

function Signup(props) {
    let [username, setUsername] = useState('')
//  let [username, setUsername] = ['value', (input) => { username = input }]
    let [password, setPassword] = useState('')
    let handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${APIURL}/api/user/createuser`, {
            method: 'POST',
            body: JSON.stringify({ user: { username: username, password: password} }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then((res) => res.json())
        .then(user => {
            props.updateToken(user.sessionToken)
        })
    }
    
    return (
        <div>
            <h3>Sign Up</h3>
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
            id="email"
            value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                    // onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="password" name="password" value={password} />
                    minLength="6"
            onChange={e => setPassword(e.target.value)}
            name="email"
            placeholder="password"
            type="password"
            id="password"
            value={password}/>
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}
export default Signup