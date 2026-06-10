import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>Invalid path: {pathname}</p>
      <div>
        <Link to="/lessons/lesson-10/">Go Home</Link>
      </div>
    </section>
  );
}
