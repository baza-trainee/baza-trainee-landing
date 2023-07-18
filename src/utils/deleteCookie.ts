'use server';
import { cookies } from 'next/dist/client/components/headers';

export async function deleteTokenCookie() {
  cookies().set({
    name: 'token',
    value: '',
    maxAge: 0,
  });
}
