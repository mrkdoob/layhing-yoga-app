import { z } from 'zod';

export const EventValidation = z.object({
  username: z.string().min(1),
  body: z.string().min(1),
});

export const EditEventValidation = z.object({
  id: z.coerce.number(),
  username: z.string().min(1),
  body: z.string().min(1),
});

export const DeleteEventValidation = z.object({
  id: z.coerce.number(),
});
