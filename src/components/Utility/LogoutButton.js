import React from 'react';
import { useNavigate } from 'react-router-dom';

// LogoutButton component that triggers the logout process and redirects the user.
const LogoutButton = ({ onLogout }) => {
  // Hook to give access to the navigate function for redirecting the user.
  const navigate = useNavigate();

  // Function to handle the click event on the logout button.
  const handleLogoutClick = () => {
    onLogout(); // Call the provided onLogout function to execute logout logic.
    navigate('/'); // Redirect user to the home page after logout.
  };

  // Render the logout button with an onClick event bound to handleLogoutClick.
  return (
    <button onClick={handleLogoutClick} className="logout">
      Logout
    </button>
  );
};

export default LogoutButton;
