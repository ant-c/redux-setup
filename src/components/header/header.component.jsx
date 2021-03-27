import React from 'react';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  const { name, email } = currentUser ? currentUser : ['', ''];
  console.log(currentUser);

  return(
    <div className='header'>
      <div className='user'>
        <span>Header</span>
        <span>{name}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);