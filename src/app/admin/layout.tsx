import { Sidebar } from '@/components/AdminPage/SideBar';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
const url = process.env.NEXT_PUBLIC_SERVER_URL;

export const metadata = {
  title: 'Baza-Trainee',
};

function AdminPageLayout({
  children,
  isAuthenticated,
}: {
  children: React.ReactNode;
  isAuthenticated: boolean;
}) {
  console.log(isAuthenticated);
  return (
    <main className="flex bg-base-dark">
      <Sidebar /> {children}
    </main>
  );
}

export default AdminPageLayout;

export const getServerSideProps: GetServerSideProps<{
  isAuthenticated: boolean;
}> = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{ isAuthenticated: any }>> => {
  const token = context.req.cookies.token;
  console.log('asdasd', token);

  if (token) {
    try {
      const res = await fetch(`${url}/auth/user`, {
        headers: {
          Cookie: `token=${token}`,
        },
      });
      if (res.ok) {
        //      const repo = await res.json();

        const isAuthenticated = true;
        return {
          props: {
            isAuthenticated,
          },
        };
      }
    } catch (error) {
      console.error('Token validation error:', error);
    }
  }

  const isAuthenticated = token;
  return {
    props: {
      isAuthenticated,
    },
  };
};
