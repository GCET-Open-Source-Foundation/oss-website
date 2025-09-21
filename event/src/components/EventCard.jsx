import React from 'react';
import './EventCard.css';

function EventCard({ type, date, time }) {
    const cardClassName = type.includes('AI') ? 'ai-workshop-card' : 'coding-contest-card';

    return (
        <div className={`event-card ${cardClassName}`}>
            <h3 className="event-type">{type}</h3>
            <p className="event-date">{date}</p>
            <p className="event-time">{time}</p>
            <button className="learn-more-btn">Learn More</button>
        </div>
    );
}

export default EventCard;