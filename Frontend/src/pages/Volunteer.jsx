import React from 'react';
import kunalImg from '../images/kunal.jpg';
import manavImg from '../images/manav.jpg';

const founders = [
  {
    name: 'Kunal Punjabi',
    role: 'Designed and implemented responsive UI components, collaborated on backend development, and contributed to API integration for smooth data flow.',
    image: kunalImg,
  },
  {
    name: 'Manav Punjabi',
    role: 'Developed backend services, integrated APIs, and collaborated closely on frontend features to ensure cohesive application functionality.',
    image: manavImg,
  },
];


const Volunteer = () => {
  return (
    <div className="about-us" style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>About Us</h2>
      <div
        className="founders"
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}
      >
        {founders.map((founder, index) => (
          <div
            key={index}
            className="founder"
            style={{
              width: '200px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              background: '#fff',
              overflow: 'hidden',   // Ensures no overflow visible
            }}
          >
            <div
              className="founder-image"
              style={{
                width: '100%',
                height: '220px',
                margin: 0,        // no margin or padding
                padding: 0,
              }}
            >
              <img
                src={founder.image}
                alt={founder.name}
                style={{
                  width: '100%',
                  height: '220px',   // exact height of container
                  objectFit: 'cover',
                  display: 'block',
                  margin: 0,
                  padding: 0,
                  borderRadius: '8px 8px 0 0',  // rounded top corners only for image
                }}
              />
            </div>
            <div className="founder-details" style={{ padding: '1rem' }}>
              <h4 style={{ margin: '0.5rem 0' }}>{founder.name}</h4>
              <p style={{ color: '#555', fontSize: '0.9rem', margin: 0 }}>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
