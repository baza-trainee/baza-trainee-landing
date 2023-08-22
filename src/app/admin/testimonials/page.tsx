'use client';
import { useRouter } from 'next/navigation';

export default function Testimonials() {
  const router = useRouter();
  router.replace('/admin/testimonials/ua');
  return null;
}
