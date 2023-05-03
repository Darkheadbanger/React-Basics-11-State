import React from 'react';

export default function SignupForm() {
  // states here
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState([]);

  const display = (e) => {
    e.preventDefault();
    setEmail('');
    setName('');
    alert('Name & Email added');
    console.log('nam: ${name} & email: ${email} here');
    if (name === '' || email === '') return false;
    setMessage([...message, { email, name }]);
  };

  return (
    <React.StrictMode>
      <React.Fragment>
        <form>
          <label htmlFor="name">
            Name :
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Mary"
            />
          </label>
          <br />
          <label htmlFor="email">
            Email :
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="mary.poppins@disney.fr"
            />
          </label>
          <br />
          <br />
          <button type="submit" onClick={display}>
            Submit
          </button>
        </form>
        <div>
          <ul className="list">
            {message.map((messages, index) => (
              <li key={index} className="message">
                {`Name: ${messages.name}, Email: ${messages.email}`}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>{' '}
    </React.StrictMode>
  );
}
