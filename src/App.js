import React from 'react';
import ProfileContainer from './components/ProfileContainer';
import CreateProfileForm from './components/CreateProfileForm';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h1 style={{ color: 'red' }}>Michael/Kwon's CRUD(dy) App</h1>
      <CreateProfileForm />
      <ProfileContainer />
    </div>
  );
};

export default App;
