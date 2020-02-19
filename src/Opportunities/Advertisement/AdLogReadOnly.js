import React from 'react'
import { Table, Button } from 'reactstrap'
import AdIndex from './AdIndex'
import APIURL from '../../helpers/environment'

const AdLog = (props) => {

    const fetchAllAds = (ad) => {
        fetch(`${APIURL}/api/adlog/${ad.id}`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchAds())
    }
    const AdMapper = () => {
        return props.ads.map(
            function (ad, index) {
                return( 
                <tr key={index}>
                    <th scope="row">{ad.id}</th>
                    <td>{ad.opporunity}</td>
                    <td>{ad.duration}</td>
                    <td>{ad.size}</td>
                    <td>{ad.contact}</td>
                    <td>{ad.cost}</td>
                    
                </tr>
                )
            }
        )
    }
    
    return (
        <>
          <h3>My Opportunities</h3>
          <hr />
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Opportunity</th>
                <th>Duration</th>
                <th>Size</th>
                <th>Contact</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
                {AdMapper()}
            </tbody>
          </Table>
        </>
      )
}

export default AdLog