import React from 'react';
import './app.css';
import Header from './components/Header';
import EventCard from './components/EventCard';
import NotifyMeButton from './components/NotifyMeButton';

function App() {
    const events = [
        { type: 'AI Workshop', date: '15 Sep 2025', time: '10:00 AM' },
        { type: 'AI Workshop', date: '15 Sep 2025', time: '10:00 AM' },
        { type: 'AI Workshop', date: '15 Sep 2025', time: '10:00 AM' },
        { type: 'Coding Contest', date: '15 Sep 2025', time: '10:00 AM' },
        { type: 'Coding Contest', date: '15 Sep 2025', time: '10:00 AM' },
        { type: 'Coding Contest', date: '15 Sep 2025', time: '10:00 AM' },
    ];

    return (
        <div className="app-container">
            <div className="background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
                <div className="shape shape-5"></div>
            </div>

            <Header />

            <div className="events-section">
                <div className="events-header">
                    <h2 className="upcoming-events-title">Upcoming Events</h2>
                    <NotifyMeButton />
                </div>
                <div className="event-cards-grid">
                    {events.map((event, index) => (
                        <EventCard key={index} type={event.type} date={event.date} time={event.time} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;