import React from 'react'
import TravelerCard from '../components/TravelerCard'
import SearchBar from '../components/SearchBar'
import { useArray } from '../contexts/arrayContext'

const TripDetails = () => {
    const { travelerArray } = useArray();

    return (
        <>
            {/* Intestazione pagina */}
            <div className="row my-3">
                <div className="col-12">
                    <h1 className='mb-3'>Nome del viaggio</h1>
                    <h3>Destinazione</h3>
                    <p>Dal XX/XX/XXXX al YY/YY/YYYY</p>
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
                        {travelerArray.map((traveler) => (
                            <TravelerCard key={traveler.id} id={traveler.id} nome={traveler.nome} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TripDetails;