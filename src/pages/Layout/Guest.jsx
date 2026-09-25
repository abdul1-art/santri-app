import { Outlet } from 'react-router';

function GuestLayout() {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', borderBottom: '1px solid #ddd', alignItems: 'center' }}>
        <h2>SantriApp</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/testimony">Testimony</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/signin" style={{ padding: '5px 15px', backgroundColor: '#007bff', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>Sign In</Link>
        </div>
      </nav>
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayout;