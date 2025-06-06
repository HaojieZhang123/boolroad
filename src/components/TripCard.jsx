import React from 'react'
import { Link } from 'react-router-dom'

const TripCard = ({ trip }) => {
    return (
        <>
            <div className="col-12">
                <Link className='text-decoration-none' to={`/trip/${trip.id}`}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{trip.destination}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{trip.trip_name}</h6>
                            <p className="card-text">{trip.start} - {trip.end}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default TripCard