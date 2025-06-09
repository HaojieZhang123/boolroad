import React from 'react'
import TripCard from '../components/TripCard'
import { useArray } from '../contexts/arrayContext'
import { useState, useEffect } from 'react'

const Homepage = () => {

    // setArray to update array in case of adding new trip
    const { array, setArray } = useArray();

    // state toggle of new trip's form
    const [showAddTrip, setShowAddTrip] = useState(false);

    const voidFormData = { id: '', destination: '', trip_name: '', start: '', end: '' };
    // form data
    const [formData, setFormData] = useState(voidFormData);

    // on change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // on submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // add id
        formData.id = array.length + 1;

        setArray([...array, formData]);
        setFormData(voidFormData);
    };

    // useEffect to update array in case of adding new trip
    useEffect(() => {
        setArray(array);
        // console.log(array);
    }, [array]);

    return (
        <>
            <div className="row py-3">
                <div className="col-12 d-flex justify-content-between">
                    <h1><b>Viaggi in corso</b></h1>

                    <button className="btn custom-button" onClick={() => setShowAddTrip((prev) => !prev)}>
                        {showAddTrip ? 'Annulla' : 'Aggiungi nuovo viaggio'}
                    </button>
                </div>
            </div>

            <div className="row py-3">
                {showAddTrip && (
                    <div className="col-12 py-3">
                        {/* form adding new trip */}
                        <form onSubmit={handleSubmit}>
                            <div className="row py-1">
                                <div className="col-12 col-lg-6">
                                    <label className="form-label">Destinazione</label>
                                    <input type="text" className="form-control" name='destination' required value={formData.destination} onChange={handleChange} />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <label className="form-label">Nome del viaggio</label>
                                    <input type="text" className="form-control" name='trip_name' required value={formData.trip_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row py-1">
                                <div className="col-12 col-lg-6">
                                    <label className="form-label">Data di inizio</label>
                                    <input type="text" className="form-control" name='start' required placeholder='inserire data in formato yyyy/mm/dd' value={formData.start} onChange={handleChange} />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <label className="form-label">Data di fine</label>
                                    <input type="text" className="form-control" name='end' required placeholder='inserire data in formato yyyy/mm/dd' value={formData.end} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <div className="col-12">
                                    <label className="form-label">Image url</label>
                                    <input type="text" className="form-control" name='image' required placeholder='inserire image url' value={formData.image} onChange={handleChange} />
                                </div>
                            </div>
                            <button type="submit" className="btn py-2 custom-button">
                                Aggiungi
                            </button>
                        </form>
                    </div>
                )}
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




