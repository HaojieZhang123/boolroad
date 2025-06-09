import React, { use } from 'react'
import { Link } from 'react-router-dom'

import { useEffect } from 'react'

import axios from 'axios'

const TripCard = ({ trip }) => {

    // let taskId;
    // let imgUrl;

    // let data = JSON.stringify({
    //     "prompt": trip.destination,
    //     "size": "3:2"
    // });

    // let config = {
    //     method: 'post',
    //     maxBodyLength: Infinity,
    //     url: 'https://kieai.erweima.ai/api/v1/gpt4o-image/generate',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
    //     },
    //     data: data
    // };
    // // fist axios call function
    // const getTaskId = () => {
    //     axios.request(config)
    //         .then((response) => {
    //             console.log(JSON.stringify(response.data));
    //             taskId = response.data.taskId
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    // let configImg = {
    //     method: 'get',
    //     maxBodyLength: Infinity,
    //     url: `https://kieai.erweima.ai/api/v1/gpt4o-image/record-info?taskId=${taskId}`,
    //     headers: {
    //         'Accept': 'application/json',
    //         'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
    //     }
    // };

    // const getImage = () => {
    //     axios.request(configImg)
    //         .then((response) => {
    //             console.log(JSON.stringify(response.data));
    //             imgUrl = response.data.image
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    // useEffect(() => {
    //     getTaskId();
    //     getImage();
    //     console.log(imgUrl);
    // }, [])
    // Not working, API behind paywall


    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 my-1">
                <Link className='text-decoration-none' to={`/trip/${trip.id}`}>
                    <div className="card trip-card" style={{ backgroundImage: `url(${trip.image})` }}>
                        <div className="card-body">
                            <h5 className="card-title text-light fw-bold">{trip.destination}</h5>
                            <h6 className="card-subtitle mb-2 text-light fw-bold">{trip.trip_name}</h6>
                            <p className="card-text text-light fw-bold">{trip.start} - {trip.end}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default TripCard