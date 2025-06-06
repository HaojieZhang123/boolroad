import React from 'react'
import TravelerCard from '../components/TravelerCard'
import SearchBar from '../components/SearchBar'

const TripDetails = () => {
    const TravelerArray = [1, 2, 3, 4, 5]
    return (
        <>
            {/* intestazione pagina */}
            <div className="row my-3">
                <div className="col-12">
                    <h1 className='mb-3'>Nome viaggio</h1>
                    <h3>Destinazione</h3>
                    <p>Date</p>
                </div>
            </div>

            {/* barra di ricerca */}
            <div className="row my-3">
                <div className="col-12">
                    <h2>Rubrica</h2>
                </div>
                <div className="col-12">
                    <SearchBar />
                </div>
            </div>

            {/* rubrica */}
            <div className="row my-3">
                <div className="col-12">
                    <div className="accordion" id="accordionExample">
                        {TravelerArray.map((traveler) => {
                            return (
                                <TravelerCard key={traveler} id={traveler} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TripDetails