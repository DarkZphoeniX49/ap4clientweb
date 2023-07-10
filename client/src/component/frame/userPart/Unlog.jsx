import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Unlog() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      localStorage.clear();
      navigate('/');
    };

    handleLogout();
  }, [navigate]);

  return (
    <div>
      <p>déconnexion en cours ...</p>
    </div>
  );
}
