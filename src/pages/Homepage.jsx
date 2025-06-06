import React from 'react'
import TripCard from '../components/TripCard'


const Homepage = () => {
    return (
        <>
            <div className="row my-3">
                <div className="col-12">
                    <h1>Viaggi in corso</h1>
                </div>
            </div>


            <div className="row">
                <div className="col-12 mb-3">
                    <TripCard />
                </div>
                <div className="col-12 mb-3">
                    <TripCard />
                </div>
                <div className="col-12 mb-3">
                    <TripCard />
                </div>
                <div className="col-12 mb-3">
                    <TripCard />
                </div>
            </div>
        </>
    )
}

export default Homepage




