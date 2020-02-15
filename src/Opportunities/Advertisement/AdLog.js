import React from 'react'
import { Table, Button } from 'reactstrap'
import AdIndex from './AdIndex'
import APIURL from '../../helpers/environment'

const AdLog = (props) => {

    const deleteAd = (ad) => {
        fetch(`${APIURL}/api/adlog/delete/${ad.id}`, {
            method: 'DELETE',
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
                    <td>
                        <Button color = 'success' onClick={() => {props.editUpdateAd(ad); props.updateOn()}}>Update</Button>
                        <Button color = "danger" onClick={() => {deleteAd(ad)}}>Delete</Button>
                    </td>
                </tr>
                )
            }
        )
    }
    
    return (
        <>
          <h3>Find Your Spot</h3>
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