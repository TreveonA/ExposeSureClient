import React, {useState, useEffect} from 'react'
import {Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import AdCreate from './AdCreate'
import AdLog from './AdLog'
import AdEdit from './AdEdit'
import Sitebar from '../../Navbar/Navbar'
import clearToken from '../../App'
import classnames from 'classnames'
import APIURL from '../../helpers/environment'
import AdLogReadOnly from './AdLogReadOnly'

function AdIndex(props) {
    const [ads, setAds] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [adToUpdate, setAdToUpdate] = useState({});

    const [activeTab, setActiveTab] = useState('1')
    const toggle = tab => { 
        if(activeTab !== tab) setActiveTab(tab)}

    
    

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
        fetch(`${APIURL}/api/adlog/`, {
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
        <Container className='log-background'>
          <Sitebar clickLogout={props.clearToken}/>
                  <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
           <b>My Opportunities</b> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <b>Opportunities</b>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          
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
              {/* <h4>Tab 1 Contents</h4> */}

            
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
            <Row>
                
                <Col>
                    <AdLogReadOnly 
                    ads={ads} 
                    fetchAds = {fetchAds} 
                    // token={props.token}
                    
                    />
                </Col>
                
            </Row>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
            <Row>
             <Col>
              
             
            </Col>
          </Row>
        
               
        </Container>
    )

    
}

export default AdIndex

