import React from 'react';
import './Customers.css'

class Customers extends React.Component {


    render() {
        const customers = [
            {
                ID: 1,
                name: "Tushar",
                address: "Pune"
            },
            {
                ID: 2,
                name: "Akshay",
                address: "India"
            },
            {
                ID: 3,
                name: "Kapil",
                address: "India"
            },
            {
                ID: 4,
                name: "Omkar",
                address: "Pune"
            },
        ]
        
        const selectedCustomer = customers.filter(function (customer) {
            return ((customer.name).startsWith('A') && customer.address === "India")
        }).map(function (customer) {
        return (<tbody><tr key={customer.ID} ><td>{customer.ID}</td><td>{customer.name}</td><td>{customer.address}</td></tr></tbody>)
        })

        return (
            <div>
                <div>
                    <h2>Customers</h2>
                    <table>{selectedCustomer}</table>
                </div>
            </div>
        )
    }


}


export default Customers;