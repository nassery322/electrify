import React, {useEffect} from 'react'
import './Services.css'
import ServiceItem from './ServiceItem'

    const servicesData = [
        {
        id: 1,
        name: "Shipping and delivery",
        description: "We offer a variety of shipping options to ensure that your order arrives when you need it. standard delivery takes 3 business days. For an additional fee, we also offer expedited shipping options. We also ship internationally, with delivery times and rates varying by location.",
        style: {'marginBottom': '2%',
            'transitionDelay' : "200ms" }
        },
        {
        id: 2,
        name: "Return and exchange policy",
        description: "We want you to be completely satisfied with your purchase. If you are not, you may return or exchange your item within 3 days of receiving it. Please note that some items are not eligible for return or exchange..",
        style: {'marginBottom': '2%',
            'transitionDelay' : "400ms" }
        },
        {
        id: 3,
        name: "Order tracking",
        description: "You can track the status of your order by logging into your account or using the tracking number provided in your shipping confirmation email. If you have any questions about the status of your order, please contact us at [contact information].",
        style: {'marginBottom': '2%',
            'transitionDelay' : "600ms" }
        },
        
        {
        id: 5,
        name: "Privacy and security",
        description: "We take the privacy and security of your personal and financial information very seriously. We use industry-standard encryption to protect your information as it is transmitted to us, and we do not share your information with third parties.",
        style: {'marginBottom': '0%',
            'transitionDelay' : "200ms" }
        },
        {
        id: 6,
        name: "Payment methods",
        description: "We accept the following payment methods:Credit Card, visa Card, Paypal, Crypto Currency : Bitcoin and etterium only. All payments are processed securely through our payment gateway. ",
        style: {'marginBottom': '0%',
            'transitionDelay' : "400ms" }
        },
        {
        id: 7,
        name: "Gift options",
        description: "Need to send a gift? We offer gift wrapping and gift cards for all of our products. Simply select the gift wrapping or gift card option. This can be especially convenient for customers who are sending gifts directly to the recipient and want to save time on wrapping.",
        style: {'marginBottom': '0%',
            'transitionDelay' : "600ms" }
        }
        ]
        
        

const Services = props =>{


    useEffect( () =>{
        const observer = new IntersectionObserver( (entries) => {
            entries.forEach( (entry) => { 
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                }
            
             } )
        } )
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach( (el) => {observer.observe(el)} )
    },[])

    return <React.Fragment>
         <div className='services' id='services'>
         Our Services :
            <div className='website-services'>
            
            {servicesData.map( (item) => <ServiceItem key={item.id} style={item.style} header={item.name} description={item.description} />  )}
            </div>
         </div>
         </React.Fragment>
    
}

export default Services;