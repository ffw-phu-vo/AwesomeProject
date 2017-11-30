const createUser = (name, mail, pass) => (
    fetch('http://dev-awesomeproject-d8.pantheonsite.io/user/register?_format=json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": { "value": name },
        "mail": { "value": mail },
        "pass": { "value": pass }
      })
    })
    .then(res => res.json())
);

module.exports = createUser;
