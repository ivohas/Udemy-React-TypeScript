import { useRef } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Form from './components/Form';

const App = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleSave = (data: unknown) => {
    const extratedData = data as { name: string; email: string };
    console.log('Name:', extratedData.name);
    console.log('Email:', extratedData.email);
  };

  return (
    <main>

      <Form onSave={handleSave} className='form'>
        <Input label="Name" id="name" type='text' />
        <Input label="Email" id="email" ref={emailRef} />
        <Button el="button" type="submit" className='button'> Submit</Button>
      </Form>
    </main>
  );
}

export default App;
