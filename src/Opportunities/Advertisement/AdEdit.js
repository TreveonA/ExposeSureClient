import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import APIURL from '../../helpers/environment'

const AdEdit = (props) => {
    const [editLocation, setEditLocation] = useState(props.adToUpdate.location);
    const [editDuration, setEditDuration] = useState(props.adToUpdate.duration);
    const [editSize, setEditSize] = useState(props.adToUpdate.size);
    const [editContact, setEditContact] = useState(props.adToUpdate.contact)
    const [editCost, setEditCost] = useState(props.adToUpdate.cost)

    const updateCurrent = (event) => {
        event.preventDefault()
        fetch(`${APIURL}/api/adlog/update/${props.adToUpdate.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({adlog: {
                location: editLocation, 
                duration: editDuration, 
                size: editSize,
                contact: editContact,
                cost: editCost
            }})
        }).then(res => { props.fetchAds(); props.updateOff() })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Post an Advertising Opportunity</ModalHeader>
            <ModalBody>
                <Form onSubmit={updateCurrent}>
                    <FormGroup>
                        <Label htmlFor="location">Edit Location:</Label>
                        <Input name="location" value={editLocation} onChange={(e) => setEditLocation(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="duration">Edit Duration:</Label>
                        <Input name="duration" value={editDuration} onChange={(e) => setEditDuration(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="size">Edit Size:</Label>
                        <Input name="size" value={editSize} onChange={(e) => setEditSize(e.target.value)}>
                        </Input>
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
                    <Button type="submit">Update the Ad!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default AdEdit