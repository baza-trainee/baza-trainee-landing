'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export const WithAuth = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [data, setData] = useState<boolean>();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/user`
      );
      const res = await response.json();
      console.log(res);
      if (!res?.name) {
        router.push('/');
      } else {
        router.push('/admin');
        setData(true);
      }
    };
    getUser();
  }, [router]);

  return <>{data && children}</>;
};
