import { useEffect } from 'react';

function NotFoundPage() {
  useEffect(() => {
    window.location.href = '/';
  }, []);

  return <></>;
}
export default NotFoundPage;
