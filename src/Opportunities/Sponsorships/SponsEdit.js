import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const SponsEdit = (props) => {
    const [editEvent, setEditEvent] = useState(props.sponsToUpdate.event);
    const [editDuration, setEditDuration] = useState(props.adToUpdate.duration);
    const [editContact, setEditContact] = useState(props.adToUpdate.contact)
    const [editCost, setEditCost] = useState(props.adToUpdate.cost)

    const updateCurrent = (event) => {
        event.preventDefault()
        fetch(`http://localhost:5000/api/log/update/${props.sponsToUpdate.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({sponslog: {
                event: editEvent, 
                duration: editDuration,
                contact: editContact,
                cost: editCost
            }})
        }).then(res => { props.fetchSpons(); props.updateOff() })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Post an Sponsorship</ModalHeader>
            <ModalBody>
                <Form onSubmit={updateCurrent}>
                    <FormGroup>
                        <Label htmlFor="event">Edit Event:</Label>
                        <Input name="event" value={editEvent} onChange={(e) => setEditEvent(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="duration">Edit Duration:</Label>
                        <Input name="duration" value={editDuration} onChange={(e) => setEditDuration(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="contact">Edit Contact:</Label>
                        <Input name="contact" value={editContact} onChange={(e) => setEditContact(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cost">Edit Cost:</Label>
                        <Input name="cost" value={editCost} onChange={(e) => setEditCost(e.target.value)}>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Update the Sponsorship!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default SponsEdit