import  { useState } from 'react';
import ava from '../../images/avatar.png';
import NavbarPage from './Nav';
const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const encryptPassword = (password) => {
    return password.split('').reverse().join('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encryptedPassword = encryptPassword(password);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNumber);
    console.log('Encrypted Password:', encryptedPassword);
  };

  return (
    <div>
        <NavbarPage/>
    
    <div
    
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          flex: 1,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: '#ccc',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
          }}
        >
          <img src={ava} alt="Avatar" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          padding: '20px',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Profile Details</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Mobile Number:</label>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="submit"
              style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'black', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '5px' }}
            >
              Save
            </button>
            <button
              type="button"
              style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'black', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
