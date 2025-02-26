import Cookies from 'js-cookie';
import { BASENDPOINT, RegisterPoint } from '../../../variable';

export default async function handleRegister(state, navigate, location) {
  const loadingState = bool => state[0](bool);
  const isnotSuccessfullState = bool => state[1](bool);
  const responseMessageState = message => state[2](message);
  const { username, password } = state[3];

  const handleErrors = message => {
    loadingState(false);
    responseMessageState(message);
    isnotSuccessfullState(true);
  };

  loadingState(true);
  isnotSuccessfullState(false);

  if (username) {
    if (password) {
      fetch(BASENDPOINT + RegisterPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => {
          if (!response.ok) {
            throw { response, message: `HTTP error! Status: ${response.status}` };
          }
          return response.json();
        })
        .then(data => {
          if (data.token) {
            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 6); // Token expires in 6 hours
            Cookies.set('accessToken', data.token, { expires: expiryDate });
            
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
          }
        })
        .catch(error => {
          if (error.response) {
            handleErrors('An error occurred while registering');
          } else {
            console.error('Error:', error);
            handleErrors('An error occurred');
          }
        });
    } else {
      handleErrors('Please enter your password');
    }
  } else {
    handleErrors('Please enter your username');
  }
}
