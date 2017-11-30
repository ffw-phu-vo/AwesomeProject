const logOut = () => (
  fetch('http://dev-awesomeproject-d8.pantheonsite.io/user/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'text/html',
    }
  })
);

export default logOut;
