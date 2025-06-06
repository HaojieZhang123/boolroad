import React from 'react'
import TripCard from '../components/TripCard'
import { useArray } from '../contexts/arrayContext'


const Homepage = () => {

    const { array } = useArray();

    return (
        <>
            <div className="row my-3">
                <div className="col-12">
                    <h1>Viaggi in corso</h1>
                </div>
            </div>


            <div className="row">
                {array.map((trip) => (
                    <TripCard trip={trip} key={`trip-${trip.id}`} />
                ))}
            </div>
        </>
    )
}

export default Homepage




