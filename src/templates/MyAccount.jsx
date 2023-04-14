import React from 'react';
import '@styles/MyAccount.scss';

function MyAccount() {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <p className="value">Carlos Florez</p>
            <label htmlFor="email" className="label">Email</label>
            <p className="value">carlosflorez@gmail.com</p>
            <label htmlFor="new-password" className="label">Password</label>
            <p className="value">*********</p>
          </div>
          <input className="secondary-button login-button" type="submit" defaultValue="Edit" />
        </form>
      </div>
    </div>
  );
}
export default MyAccount;