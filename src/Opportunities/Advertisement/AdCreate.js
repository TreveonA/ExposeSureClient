// imports

import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import APIURL from '../../helpers/environment'

// a function

const AdCreate = (props) => {
    let [opportunity, setOpportunity] = useState('')
    let [duration, setDuration] = useState('')
    let [size, setSize] = useState('')
    let [contact, setContact] = useState('')
    let [cost, setCost] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${APIURL}/api/adlog`, {
            method: 'POST',
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": props.token
            }),
            body: JSON.stringify(
                {adlog:{ 
                    opportunity: opportunity, 
                    duration: duration, 
                    size: size,
                    contact: contact,
                    cost: cost
                }})
        }).then((res) => res.json())
        .then(logData => {
            console.log(logData)
            setOpportunity('')
            setDuration('')
            setSize('')
            setContact('')
            setCost('')
            props.fetchAds()
        })
    }

    return(
        <>
            <h3>Post an Ad</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label htmlFor="Opportunity" />
                    <Input onChange = {(e) => {setOpportunity(e.target.value)}} type="select" placeholder='Select Opportunity' name="Opportunity" value={opportunity}>
                        <option value="Advertising">Advertising</option>
                        <option value="Sponsorships">Sponsorships</option>
                        <option value="Tabling">Tabling</option>
                    </Input> 
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Duration" />
                    <Input onChange = {(e) => {setDuration(e.target.value)}} name="duration" placeholder='Enter Ad Duration' value={duration} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Size" />
                    <Input onChange = {(e) => {setSize(e.target.value)}} name="size" placeholder='Enter Ad Size' value={size} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Contact" />
                    <Input onChange = {(e) => {setContact(e.target.value)}} name="contact" placeholder="Enter Contact Info" value={contact} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Cost" />
                    <Input onChange = {(e) => {setCost(e.target.value)}} name = "cost" placeholder='Enter Ad Cost' value={cost} />
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form>
        </>
    )
}

// export

export default AdCreate