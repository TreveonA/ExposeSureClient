import React, {useState, useEffect} from 'react'
import {Container, Row, Col } from 'reactstrap'
import SponsCreate from './SponsCreate'
import SponsLog from './SponsLog'
import SponsEdit from './SponsEdit'

function SponsIndex(props) {
    const [spons, setSpons] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [sponsToUpdate, setSponsToUpdate] = useState({});

    const editUpdateSpons = (spons) => {
        setSponsToUpdate(spons);
        console.log(spons);
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }
    const fetchSpons = () => {
        fetch('http://localhost:5000/api/sponslog/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(res => res.json())
        .then(logData => {setSpons(logData); console.log(logData)})
    }

    useEffect(() => {
        fetchSpons()
    }, [])

    return (
        <Container>
            <Row>
                <Col md="3">
                    <SponsCreate fetchSpons = {fetchSpons} token={props.token} />
                </Col>
                <Col md="9">
                    <SponsLog 
                    spons={spons} 
                    fetchSpons = {fetchSpons} 
                    token={props.token}
                    editUpdateSpons={editUpdateSpons}
                    updateOn={updateOn}
                    />
                </Col>
                {
                    updateActive 
                    ? 
                    <SponsEdit sponsToUpdate={sponsToUpdate} updateOff={updateOff} token={props.token} fetchSpons ={fetchSpons} 
                    />
                    :
                    null
                }
            </Row>
        </Container>
    )
}

export default SponsIndex