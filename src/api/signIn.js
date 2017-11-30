const signIn = (name, pass) => (
    fetch('http://dev-awesomeproject-d8.pantheonsite.io/user/login?_format=json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": name,
        "pass": pass,
      })
    })
    .then(res => res.json())
);

module.exports = signIn;
