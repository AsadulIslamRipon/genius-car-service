import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css";

const Service = (props) => {
    const {id, img, name, description, price} = props.service;

    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`service/${id}`);
    }
    // console.log(props.service);
    return (
        <div id="service" className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p className='service-price'>Price: <span>{price}</span></p>
            <p className='service-descrip'>{description}</p>
            <button onClick={ () =>navigateToServiceDetail(id)}>Book: {name}</button>

        </div>
    );
};

export default Service;