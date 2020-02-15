// imports

import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'

// a function

const SponsCreate = (props) => {
    let [event, setEvent] = useState('')
    let [duration, setDuration] = useState('')
    let [contact, setContact] = useState('')
    let [cost, setCost] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:5000/api/sponslog", {
            method: 'POST',
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": props.token
            }),
            body: JSON.stringify(
                {sponslog:{ 
                    event: event, 
                    duration: duration, 
                    contact: contact,
                    cost: cost
                }})
        }).then((res) => res.json())
        .then(logData => {
            console.log(logData)
            setEvent('')
            setDuration('')
            setContact('')
            setCost('')
            props.fetchAds()
        })
    }

    return(
        <>
            <h3>Post an Sponsorship</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="Event" />
                    <Input onChange = {(e) => {setEvent(e.target.value)}} name="event" value={event} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Duration" />
                    <Input onChange = {(e) => {setDuration(e.target.value)}} name="duration"  value={duration} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Contact" />
                    <Input onChange = {(e) => {setContact(e.target.value)}} name="contact" value={contact} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Cost" />
                    <Input onChange = {(e) => {setCost(e.target.value)}} name = "cost" value={cost} />
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form>
        </>
    )
}

// export

export default SponsCreate