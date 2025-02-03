/* eslint-disable */
import axios from 'axios';

export const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    // const res = axios
    //   .post('http://127.0.0.1:3000/api/v1/users/login', {
    //     email: 'user@example.com',
    //     password: 'yourpassword',
    //   })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.error(error));
    if (res.data.status === 'success') {
      alert('Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};
