import React from 'react';

const UserCard = ({ user }) => (
  <div>
      <div key={user.id} className="usercard">
      <h3>{user.username}</h3>
      </div>
  </div>
)

export default UserCard;
