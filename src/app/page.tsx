'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function Home() {
  useEffect(() => {
    const landingLanguage = localStorage.getItem('landingLanguage') || 'ua';
    redirect(`/${landingLanguage}`);
  }, []);
}
