import React from 'react'
import { useState } from 'react'

const TravelerCard = ({ traveler }) => {

    const [open, setOpen] = useState(false);

    // function to update open
    const handleOpen = () => {
        setOpen(!open);
    };

    // Placeholder avatar if you don't have images
    const avatarUrl = traveler.avatar || `https://ui-avatars.com/api/?name=${traveler.name}+${traveler.surname}&background=2669EC&color=fff&size=128`;

    return (
        <>
            <div className={`accordion-item col-11 ${open ? '' : 'col-lg-5 '}`}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed traveler-card" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${traveler.id}`} aria-expanded="true" aria-controls={`collapse${traveler.id}`} onClick={handleOpen}>
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