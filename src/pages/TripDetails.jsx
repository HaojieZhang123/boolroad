import React, { use } from 'react'
import TravelerCard from '../components/TravelerCard'
import { useArray } from '../contexts/arrayContext'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const TripDetails = () => {

    // setArray to update array in case of adding new traveler
    const { array, setArray } = useArray();

    const { id } = useParams();

    // search of specific trip
    const trip = array.find((trip) => trip.id === parseInt(id));

    // state toggle of new traveler's form
    const [showAddTraveler, setShowAddTraveler] = useState(false);

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

    // form to add new traveler
    const voidFormData = { id: '', name: '', surname: '', phone: '', email: '', cf: '', emergency: '' };
    const [formData, setFormData] = useState(voidFormData);

    // handle form change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        formData.id = travelers.length + 1;
        setTravelers([...travelers, formData]);
        setFormData(voidFormData);
    };

    // update travelers in case of adding new traveler
    useEffect(() => {
        setTravelers(trip.travelers);
    }, [trip]);


    return (
        <>

            <div className="row">
                <div className="col-12 col-lg-6">
                    {/* Intestazione pagina */}
                    <div className="row py-3">
                        <div className="col-12">
                            <h1 className='pb-3'><b>{trip.trip_name}</b></h1>
                            <h3>{trip.destination}</h3>
                            <p>Dal {trip.start} al {trip.end}</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    {/* Barra di ricerca */}
                    <div className="row py-3">
                        <div className="col-12 pb-3">
                            <h2>Rubrica dei viaggiatori</h2>
                        </div>
                        <div className="col-12">
                            <div>
                                {/* <label className="form-label">Cerca viaggiatore</label> */}
                                <input type="text" className="form-control search-bar" value={search} onChange={handleSearch} placeholder='Cerca viaggiatore' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    {/* Rubrica */}
                    <div className="row py-3">
                        <div className="col-6 pb-3">
                            <h4>
                                {filteredTravelers.length} {filteredTravelers.length === 1 ? 'viaggiatore' : 'viaggiatori'}
                            </h4>
                        </div>

                        {/* button to show add new traveler */}
                        <div className="col-6 pb-3">
                            <button type="button" className="btn custom-button float-end" onClick={() => setShowAddTraveler((prev) => !prev)}>
                                {showAddTraveler ? 'Annulla' : 'Aggiungi nuovo membro'}
                            </button>
                        </div>
                        {showAddTraveler && (
                            <div className="col-12 pb-3">
                                {/* form adding new traveler */}
                                <form onSubmit={handleSubmit}>
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control" placeholder="Nome" name='name' required value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control" placeholder="Cognome" name='surname' value={formData.surname} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-around">
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control" placeholder="Telefono" name='phone' value={formData.phone} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control" placeholder="Email" name='email' value={formData.email} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-2 d-flex justify-content-around">
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control" placeholder="Codice fiscale" name='cf' value={formData.cf} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control" placeholder="Contatto di emergenza" name='emergency' value={formData.emergency} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button type="submit" className="btn custom-button mb-3 px-5">Aggiungi</button>
                                    </div>

                                </form>
                            </div>
                        )}

                    </div>

                    <div className="row">
                        <div className="accordion d-flex flex-wrap justify-content-around gap-2" id="accordionExample">
                            {filteredTravelers.map((traveler) => (
                                <TravelerCard key={traveler.id} traveler={traveler} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default TripDetails;