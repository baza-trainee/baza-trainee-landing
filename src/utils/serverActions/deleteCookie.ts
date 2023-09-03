'use server';
import { cookies } from 'next/headers';

export async function deleteTokenCookie() {
  cookies().set({
    name: 'token',
    value: '',
    maxAge: 0,
  });
}
