/* eslint-disable @typescript-eslint/consistent-type-imports */
// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');
declare interface IntlMessages extends Messages {}

// types.ts

// Corsizio events types
export interface CorsizioResponse {
  list: Event[];
}

export interface Event {
  id: string;
  status: string;
  name: string;
  startDate: string;
  endDate: string;
  breakdownDates: any[]; // You might want to define a more specific type if needed
  hideDates: boolean;
  registrationCloseDate: string;
  displayDate: string;
  timeZone: string | null;
  location: string;
  priceFrom: number;
  priceTo: number;
  prices: any[]; // You might want to define a more specific type if needed
  currency: string;
  pageUrl: string;
  formUrl: string;
  photoUrl: string;
  mapUrl: string;
  summary: string;
  summaryHtml: string;
  created: string;
  account: string;
}
