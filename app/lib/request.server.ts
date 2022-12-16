import { json } from '@remix-run/node';

export const badRequest = <T>(data: T) =>
    json(data, { status: 400, statusText: 'Bad Request' });
