import Cookies from 'js-cookie';
import { BASENDPOINT, RenewTokenEndpoint } from '../../variable.jsx';

export default async function handleRenewToken() {
  const token = Cookies.get('accessToken'); // Get the token from cookies
  if (!token) {
    // If there's no token, redirect to login
    window.location.href = '/signin';
    return;
  }

  // Send a request to renew the token
  fetch( BASENDPOINT + RenewTokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to renew token');
    }
    return response.json();
  })
  .then(data => {
    // If the renewal is successful, store the new token in cookies
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 2); // Set a 2-day expiry for the new token
    Cookies.set('accessToken', data.token, { expires: 2, httpOnly: true });

    // Optionally, reload or update the page to reflect the renewed session
    console.log('Token renewed');
  })
  .catch(error => {
    console.error('Token renewal failed:', error);
    window.location.href = '/signin'; // Redirect to login if renewal fails
  });
}
