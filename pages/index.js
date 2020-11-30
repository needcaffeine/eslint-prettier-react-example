import React from 'react'

export default class Index extends React.Component {
    render() {
        const allCarsInInventory = ['Honda Accord', 'Toyota Corolla', 'Toyota Camry', 'Subaru Outback', 'Tesla Model X']

        const listOfAvailableCars = allCarsInInventory.map((car, i) => {
            return (<li key={i}>{car}</li>)
        })

        return (
            <>
                <h1>
                    Welcome to our car dealership! Here is a list of cars available to test drive:
                </h1>

                <ul>{listOfAvailableCars}</ul>
            </>
        )
    }
}
