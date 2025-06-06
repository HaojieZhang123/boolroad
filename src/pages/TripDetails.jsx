import React from 'react'
import TravelerCard from '../components/TravelerCard'
import SearchBar from '../components/SearchBar'
import { useArray } from '../contexts/arrayContext'
import { useParams } from 'react-router-dom'

const TripDetails = () => {
    const { array } = useArray();

    const { id } = useParams();

    // ricerca del viaggio specifico
    const trip = array.find((trip) => trip.id === parseInt(id));

    return (
        <>
            {/* Intestazione pagina */}
            <div className="row my-3">
                <div className="col-12">
                    <h1 className='mb-3'>{trip.trip_name}</h1>
                    <h3>{trip.destination}</h3>
                    <p>Dal {trip.start} al {trip.end}</p>
                </div>
            </div>

            {/* Barra di ricerca */}
            <div className="row my-3">
                <div className="col-12">
                    <h2>Rubrica dei viaggiatori</h2>
                </div>
                <div className="col-12">
                    <SearchBar />
                </div>
            </div>

            {/* Rubrica */}
            <div className="row my-3">
                <div className="col-12">
                    <div className="accordion" id="accordionExample">
                        {trip.travelers.map((traveler) => (
                            <TravelerCard key={traveler.id} traveler={traveler} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TripDetails;