import React from 'react'
import { Link } from 'react-router-dom'

const TripCard = () => {
    return (
        <>
            <Link className='text-decoration-none' to='/trip/1'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Destinazione</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Nome viaggio</h6>
                        <p className="card-text">Date</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default TripCard