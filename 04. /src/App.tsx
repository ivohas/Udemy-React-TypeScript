import React from 'react';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  return (
    <main>
      <Input label="Name" id="name"  type='text'/>
      <Input label="Email" id="email" />
      <Button el="button" type="submit" className='button'>
        Submit
      </Button>
    </main>
  );
}

export default App;
