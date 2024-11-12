import React from 'react';
import Header from './components/Header';
import PeopleContainer from './components/PeopleContainer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PeopleContainer />
    </div>
  );
}

export default App;
