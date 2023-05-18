import { Helmet } from 'react-helmet-async';
// sections
import Logout from '../sections/auth/Logout';
// import Login from '../../sections/auth/LoginAuth0';

// ----------------------------------------------------------------------

export default function LogoutPage() {
  return (
    <>
      <Helmet>
        <title> Logout</title>
      </Helmet>

      <Logout />
    </>
  );
}
