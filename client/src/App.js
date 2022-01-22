import { useState } from 'react';
import myApi from './api/Api';

const  App = () => {
  const [users, setUsers] = useState([{id:8}]);
  const [temp, setTemp] = useState([{}]);
  const [inputId, setInputId] = useState('')

  
  const getRequest = async () => {
    const { data } = await myApi.get('/users');
    setUsers(data)
    console.log(data);
  };

  const getOneUserRequest = async () => {
    // const data={}
    const { data } = await myApi.get(`/users/${inputId}`);
    setUsers([data])
    console.log(data);
  };



  const postRequest = async () => {
    const { data } = await myApi.post('/users');
    console.log(data);
  };


  const renderUsers = () => {
    const result = users.map((element)=> {
      return (
        <div key={element._id}>
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
      <h1>Hello Bank!</h1>
      <br/>
      <input type="text" value={inputId} onChange={e => setInputId(e.target.value)}/>
      <button onClick={getRequest}>get all</button>
      <button onClick={getOneUserRequest}>get one</button>
      <button onClick={postRequest}>post</button>
      {renderUsers()}

    </div>
  );

}

export default App;
