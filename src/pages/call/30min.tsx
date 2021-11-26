import { GetServerSideProps } from 'next';

export default function Page() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination:
        'https://outlook.office365.com/owa/calendar/Bookings@seriouscode.io/bookings/s/_XOTUjJA30q5oOSxmIopSQ2',
      permanent: false,
    },
  };
};
