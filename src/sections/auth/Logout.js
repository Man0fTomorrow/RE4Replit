// @mui
import { Alert, Tooltip, Stack, Typography, Link, Button, Box } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';

export default function Logout() {
  const { logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
      <Link href="/login">
          <Typography variant="h4">To Login Page</Typography>
        </Link>
    </div>
  );
}
