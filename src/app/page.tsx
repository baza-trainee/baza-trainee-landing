'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const landingLanguage = localStorage.getItem('landingLanguage') || 'ua';
    redirect(`/${landingLanguage}`);
  }, []);
}
