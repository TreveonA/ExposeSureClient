import React from 'react'
import { Table, Button } from 'reactstrap'
import AdIndex from '../Advertisement/AdIndex'
import APIURL from '../../helpers/environment'

const AdLogReadOnly = (props) => {

    
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

export default AdLogReadOnly