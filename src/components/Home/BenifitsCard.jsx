import React from 'react';
import W1 from '../Assets/W1.png';
import W2 from '../Assets/W2.png';
import W3 from '../Assets/W3.png';
import W4 from '../Assets/W4.png';
import W5 from '../Assets/W5.png';
import W6 from '../Assets/W6.png';

const Card = ({ title, imgSrc, description }) => (
  <div className="s3-card">
    <p className="s3-head">{title}</p>
    <img className="s3-img" src={imgSrc} alt={title} />
    <p className="s3-info">{description}</p>
  </div>
);

export default function BenifitsCard(params) {
    

const benefitsData = [
    {
      title: 'Enhanced Customer Satisfaction',
      imgSrc: W1,
      description: 'Elevate service quality and efficiency, fostering trust and expanding business opportunities.',
    },
    {
      title: 'Ensured Quality and Clarity for Staff',
      imgSrc: W2,
      description: 'Empower your team with clear guidelines and a deeper understanding of their roles, driving organisational success.',
    },
    {
      title: 'Strengthened Client Relationships',
      imgSrc: W3,
      description: 'Streamline processes, mitigate risks, and ensure compliance, nurturing lasting client satisfaction.',
    },
    {
      title: 'Expanded Business Opportunities',
      imgSrc: W4,
      description: 'Position your business for success by meeting ISO 9001 certification requirements, unlocking new sales avenues.',
    },
    {
      title: 'Improved Productivity and Quality',
      imgSrc: W5,
      description: 'Drive efficiency, consistency, and excellence across products, processes, and services.',
    },
    {
      title: 'Global Recognition and Prestige',
      imgSrc: W6,
      description: 'Achieve ISO certification and join an elite category of organisations recognised worldwide for their commitment to quality.',
    },
  ];

  return (
    <div className="container">
      <p className="title1">Explore the Benefits of ISO Certification With Us</p>
      <div className="s3-scroll">
        {benefitsData.map((benefit, index) => (
          <Card key={index} title={benefit.title} imgSrc={benefit.imgSrc} description={benefit.description} />
        ))}
      </div>
    </div>
  );
};

