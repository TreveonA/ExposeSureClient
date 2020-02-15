import React, {useState, useEffect} from 'react'
import {Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import AdCreate from './AdCreate'
import AdLog from './AdLog'
import AdEdit from './AdEdit'
import Sitebar from '../../Navbar/Navbar'
import clearToken from '../../Navbar/Navbar'
import classnames from 'classnames'
import SponsIndex from '../Sponsorships/SponsIndex'
import SponsCreate from '../Sponsorships/SponsCreate'

function AdIndex(props) {
    const [ads, setAds] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [adToUpdate, setAdToUpdate] = useState({});

    const [activeTab, setActiveTab] = useState('1')
    const toggle = tab => { if(activeTab !== tab) setActiveTab(tab)}

    
    

    const editUpdateAd = (ad) => {
        setAdToUpdate(ad);
        console.log(ad);
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }
    const fetchAds = () => {
        fetch('http://localhost:5000/api/adlog/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(res => res.json())
        .then(logData => {setAds(logData); console.log(logData)})
    }

    useEffect(() => {
        fetchAds()
    }, [])

    return (
        <Container>
            <Row>
             <Col>
              
                
             
            </Col>
          </Row>
        
            <Row>
                <Col md="3">
                    <AdCreate fetchAds = {fetchAds} token={props.token} />
                </Col>
                <Col md="9">
                    <AdLog 
                    ads={ads} 
                    fetchAds = {fetchAds} 
                    token={props.token}
                    editUpdateAd={editUpdateAd}
                    updateOn={updateOn}
                    />
                </Col>
                {
                    updateActive 
                    ? 
                    <AdEdit adToUpdate={adToUpdate} updateOff={updateOff} token={props.token} fetchAds ={fetchAds} 
                    />
                    :
                    null
                }
            </Row>
               
        </Container>
    )
}

export default AdIndex