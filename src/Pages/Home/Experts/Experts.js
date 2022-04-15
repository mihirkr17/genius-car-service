import React from 'react';

import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expart from '../Expert/Expart';

const experts = [
   {
      id: 1,
      name: "Will Smith",
      img: expert1
   },
   {
      id: 2,
      name: "Cris Rock",
      img: expert2
   },
   {
      id: 3,
      name: "Dwyan Rock",
      img: expert3
   },
   {
      id: 4,
      name: "Messy Bhai",
      img: expert4
   },
   {
      id: 5,
      name: "Ronaldo Bro",
      img: expert5
   },
   {
      id: 6,
      name: "Stacy Johnson",
      img: expert6
   }
]

const Experts = () => {
   return (
      <div id="experts">
         <div className="container">
            <h2 className='pt-4 mt-5 text-center'>Our Experts</h2>

            <div className="row">
               {
                  experts.map(expert => {
                     return (
                        <div className="col-lg-3 gx-5 gy-5" key={expert.id}>
                           <Expart expert={expert}></Expart>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </div>
   );
};

export default Experts;