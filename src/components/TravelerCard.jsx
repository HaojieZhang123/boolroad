import React from 'react'

const TravelerCard = ({ id }) => {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="true" aria-controls={`collapse${id}`}>
                        Nome Cognome
                    </button>
                </h2>
                <div id={`collapse${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>Telefono</p>
                        <p>Email</p>
                        <p>Codice Fiscale</p>
                        <p>Contatto di emergenza</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TravelerCard