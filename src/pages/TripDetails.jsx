import React, { use } from 'react'
import TravelerCard from '../components/TravelerCard'
import { useArray } from '../contexts/arrayContext'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const TripDetails = () => {

    const { array } = useArray();

    const { id } = useParams();

    // ricerca del viaggio specifico
    const trip = array.find((trip) => trip.id === parseInt(id));

    const [travelers, setTravelers] = useState(trip.travelers);
    const [search, setSearch] = useState([]);
    const [filteredTravelers, setFilteredTravelers] = useState([]);

    // function to search travelers based on name or surname
    const handleSearch = (e) => {
        e.preventDefault();
        const searchedName = e.target.value;
        const filtered = travelers.filter((traveler) => {
            // chain name and surname together and convert to lowercase
            const fullName = `${traveler.name} ${traveler.surname}`.toLowerCase();

            // search for name or surname
            return fullName.includes(searchedName.toLowerCase());
        });
        setFilteredTravelers(filtered);
        setSearch(searchedName);
    }

    useEffect(() => {
        setFilteredTravelers(travelers);
    }, [travelers]);

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
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Inserisci nome</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={search} onChange={handleSearch} />
                    </div>
                </div>
            </div>

            {/* Rubrica */}
            <div className="row my-3">
                <div className="col-12">
                    <div className="accordion" id="accordionExample">
                        {filteredTravelers.map((traveler) => (
                            <TravelerCard key={traveler.id} traveler={traveler} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TripDetails;