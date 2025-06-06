import React from 'react'

const TravelerCard = ({ traveler }) => {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${traveler.id}`} aria-expanded="true" aria-controls={`collapse${traveler.id}`}>
                        {traveler.name} {traveler.surname}
                    </button>
                </h2>
                <div id={`collapse${traveler.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>{traveler.phone}</p>
                        <p>{traveler.email}</p>
                        <p>{traveler.cf}</p>
                        <p>{traveler.emergency}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TravelerCard