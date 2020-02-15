import React from 'react'
import { Table, Button } from 'reactstrap'

const SponsLog = (props) => {

    const deleteSpons = (spons) => {
        fetch(`http://localhost:5000/api/log/delete/${spons.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchSpons())
    }

    const SponsMapper = () => {
        return props.spons.map(
            function (spons, index) {
                return( 
                <tr key={index}>
                    <th scope="row">{spons.id}</th>
                    <td>{spons.location}</td>
                    <td>{spons.duration}</td>
                    <td>{spons.size}</td>
                    <td>{spons.contact}</td>
                    <td>{spons.cost}</td>
                    <td>
                        <Button color = "warning" onClick={() => {props.editUpdateSpons(spons); props.updateOn()}}>Update</Button>
                        <Button color = "danger" onClick={() => {deleteSpons(spons)}}>Delete</Button>
                    </td>
                </tr>
                )
            }
        )
    }
    
    return (
        <>
          <h3>Sponsorship History</h3>
          <hr />
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Event</th>
                <th>Duration</th>
                <th>Contact</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
                {SponsMapper()}
            </tbody>
          </Table>
        </>
      )
}

export default SponsLog