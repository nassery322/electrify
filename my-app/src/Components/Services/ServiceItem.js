import React from 'react'
import './ServiceItem.css'

const ServiceItem = props =>{



    
    return <div style={props.style} className='service-item hover hidden'>
            <div className='service-header'>{props.header}</div>
            <div className='service-description'>{props.description}</div>
        </div>
    
}

export default ServiceItem;