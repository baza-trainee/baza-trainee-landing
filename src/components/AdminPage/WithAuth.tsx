'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export const WithAuth = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [isShow, setIsShow] = useState<boolean>();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/user`
      );
      console.log(response);
      if (response.ok) {
        router.push('/admin');
        setIsShow(true);
      } else {
        router.push('/');
      }
    };
    getUser();
  }, [router]);

  return <>{isShow && children}</>;
};
