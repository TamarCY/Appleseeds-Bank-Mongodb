// import { useState } from 'react';
import myApi from './api/Api';

function App() {
  // const [user, setUser] = useState('');

  console.log(process.env.NODE_ENV);

  const getReq = async () => {
    const { data } = await myApi.get('/users');
    console.log(data);
  };

  const postReq = async () => {
    const { data } = await myApi.post('/users');
    console.log(data);
  };

  return (
    <div className='App'>
      {' '}
      Hello World!
      <button onClick={getReq}>get</button>
      <button onClick={postReq}>post</button>

    </div>
  );
}

export default App;
