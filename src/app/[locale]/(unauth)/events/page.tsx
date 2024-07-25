import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';
<<<<<<< HEAD

import { EventsList } from '../../../../components/EventsList';
import type { CorsizioResponse, Event } from '../../../../types/global';
=======
import { EventsList } from '../../../../components/EventsList';
import { CorsizioResponse, Event } from '../../../../types/global';
>>>>>>> 0951c37 (Initial commit)

const API_ENDPOINT = 'https://api.corsizio.com/v1/events';

const correctPhotoUrl = (url: string): string => {
<<<<<<< HEAD
  return url.replace(
    'https://site.corsizio.com',
    'https://storage.corsizio.com',
  );
};

const fetchEventsFromApi = async (): Promise<CorsizioResponse> => {
  const apiKey = process.env.NEXT_PUBLIC_CORSIZIO_KEY;
  const response = await fetch(API_ENDPOINT, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      `Failed to fetch events from Corsizio API: ${errorMessage}`,
    );
=======
  return url.replace('https://site.corsizio.com', 'https://storage.corsizio.com');
};

const fetchEventsFromApi = async (): Promise<CorsizioResponse> => {
  const apiKey = process.env.CORSIZIO_KEY;
  const response = await fetch(API_ENDPOINT, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to fetch events from Corsizio API: ${errorMessage}`);
>>>>>>> 0951c37 (Initial commit)
  }
  const fullResponse = await response.json();

  // Correct the photoUrl for each event
  const correctedEvents = fullResponse.list.map((event: Event) => ({
    ...event,
<<<<<<< HEAD
    photoUrl: correctPhotoUrl(event.photoUrl),
=======
    photoUrl: correctPhotoUrl(event.photoUrl)
>>>>>>> 0951c37 (Initial commit)
  }));

  return { list: correctedEvents };
};

<<<<<<< HEAD
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
=======
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
>>>>>>> 0951c37 (Initial commit)
  const t = await getTranslations({
    locale,
    namespace: 'Guestbook',
  });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

<<<<<<< HEAD
export default async function Events({
  params: { locale },
}: {
  params: { locale: string };
}) {
=======
export default async function Events({ params: { locale } }: { params: { locale: string } }) {
>>>>>>> 0951c37 (Initial commit)
  const t = await getTranslations({
    locale,
    namespace: 'Guestbook',
  });
<<<<<<< HEAD

=======
  
>>>>>>> 0951c37 (Initial commit)
  let events: Event[] = [];
  try {
    const data = await fetchEventsFromApi();
    events = data.list;
  } catch (error) {
    console.error('Error fetching events:', error);
  }

  return (
    <Suspense fallback={<p>{t('loading_guestbook')}</p>}>
      <EventsList events={events} />
    </Suspense>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 0951c37 (Initial commit)
