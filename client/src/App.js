import { useState } from 'react';
import myApi from './api/Api';

const  App = () => {
  const [users, setUsers] = useState([{id:8}]);

  
  const getReq = async () => {
    const { data } = await myApi.get('/users');
    setUsers(data)
    console.log(data);
  };

  const postReq = async () => {
    const { data } = await myApi.post('/users');
    console.log(data);
  };


  const renderUsers = () => {
    const result = users.map((element)=> {
      return (
        <div>
          <h3>
            id: {element._id}
          </h3>
          <div>
            credit: {element.credit}
          </div>
          <div>
            cash: {element.cash}
          </div>
          <button>deposit</button>
          <button>withdraw</button>
          <button>transfer</button>
          <button>update credit</button>
          <button>delete</button>
        </div>
      )
    })
    return result
  }
  return (
    <div className='App'>
      {/* {' '} */}
      Hello Bank!
      <button onClick={getReq}>get</button>
      <button onClick={postReq}>post</button>
      {renderUsers()}

    </div>
  );

}

export default App;
