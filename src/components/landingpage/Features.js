import React from 'react';
import './Features.css';

const featuresData = [
    {
        id: 1,
        image: './images/f1.png',
        title: 'Order Management',
        description: 'Manage customer orders from placement to fulfillment with real-time tracking.',
    },
    {
        id: 2,
        image: './images/f2.jpg',
        title: 'Transportation Planning',
        description: 'Optimize routes, select carriers, plan loads, and schedule efficiently.',
    },
    {
        id: 3,
        image: './images/f3.jpg',
        title: 'Warehouse Management',
        description: 'Streamline inventory management, optimize storage, and ensure accurate order fulfillment.',
    },
    {
        id: 4,
        image: './images/f4.jpg',
        title: 'Shipment Tracking',
        description: 'Real-time visibility into the movement of goods throughout the supply chain.',
    },
];

const Features = () => {
    return (
        <section className="features">
           <h2>COMMITED TO FINDING A<br></br> BETTER WAY</h2>
          
            {featuresData.map((feature, index) => (
                <div
                    key={feature.id}
                    className={`feature-item ${index % 2 === 0 ? 'left' : 'right'}`}
                >
                    <div className="feature-image">
                        <img src={feature.image} alt={feature.title} />
                    </div>
                    <div className="feature-description">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Features;
