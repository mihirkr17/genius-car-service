import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch("service.json")
         .then(response => response.json())
         .then(responseData => setServices(responseData));
   }, []);

   return (
      <div id='services'>
         <div className="container">
            <h2 className='pt-4 mt-5 text-center'>Our Services</h2>
            <div className="row">
               {
                  services.map(service => {
                     return (
                        <div className="col-lg-4 gx-5 gy-5" key={service.id}>
                           <Service service={service}></Service>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </div>
   );
};

export default Services;