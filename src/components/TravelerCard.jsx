import React from 'react'

const TravelerCard = ({ traveler }) => {

    // Placeholder avatar if you don't have images
    const avatarUrl = traveler.avatar || `https://ui-avatars.com/api/?name=${traveler.name}+${traveler.surname}&background=2669EC&color=fff&size=128`;

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed traveler-card" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${traveler.id}`} aria-expanded="true" aria-controls={`collapse${traveler.id}`}>
                        <img src={avatarUrl} alt="" className="traveler-avatar" />
                        <span>
                            <span className="traveler-name">{traveler.name} {traveler.surname}</span>
                        </span>
                    </button>
                </h2>
                <div id={`collapse${traveler.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body traveler-card-details">
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