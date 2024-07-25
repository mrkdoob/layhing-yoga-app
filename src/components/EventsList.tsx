import Image from 'next/image';
import React from 'react';

import type { Event } from '../types/global';

interface EventsListProps {
  events: Event[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
  if (events.length === 0) {
    return <div>No events available.</div>;
  }

  return (
    <div className="mt-5" data-testid="event-list">
      {events.map((event) => (
        <div key={event.id} className="mb-6 rounded-lg border p-4 shadow-md">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:w-1/3">
              <Image
                src={event.photoUrl}
                alt={event.name}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="mb-2 text-xl font-bold">{event.name}</h2>
              <p className="mb-2 text-gray-600">{event.displayDate}</p>
              <p className="mb-2">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="mb-2">
                <strong>Price:</strong> {event.priceFrom}
              </p>
              <p className="mb-4">{event.summary}</p>
              <a
                href={event.formUrl}
                className="inline-block rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
