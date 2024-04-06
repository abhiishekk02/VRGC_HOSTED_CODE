import './Home.css'
import React, { useState } from 'react';
import C1 from '../Assets/C1.png';
import C2 from '../Assets/C2.png';
import C3 from '../Assets/C3.png';
import C4 from '../Assets/C4.png';
import C5 from '../Assets/C5.png';
import C6 from '../Assets/C6.jpeg';
import C7 from '../Assets/C7.jpeg';
import C8 from '../Assets/C8.png';

function ClientsScroll() {
  const [items] = useState([
    { id: 1, content: C1 },
    { id: 2, content: C2 },
    { id: 3, content: C3 },
    { id: 4, content: C4 },
    { id: 5, content: C5 },
    { id: 6, content: C6 }, 
    { id: 7, content: C7 },
     { id: 8, content: C8 }

  ]);

  return (
    <div className="container section-5">
      <div className="clients-slider">
        {items.map((item, index) => (
          <img className="clients-item" key={index} src={item.content} alt={`C${index + 1}`} />
        ))}
        {items.map((item, index) => (
          <img className="clients-item" key={index + items.length} src={item.content} alt={`C${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ClientsScroll;
