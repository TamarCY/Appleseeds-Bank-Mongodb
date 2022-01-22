import { useState } from "react";
import myApi from "./api/Api";

const App = () => {
  const [users, setUsers] = useState([{ id: 8 }]);
  const [inputId, setInputId] = useState("");
  const [postId, setPostId] = useState(undefined);
  const [postCash, setPostCash] = useState(undefined);
  const [postCredit, setPostCredit] = useState(undefined);
  const [depositId, setDepositId] = useState();
  const [depositAmount, setDepositAmount] = useState(undefined);

  const getRequest = async () => {
    const { data } = await myApi.get("/users");
    setUsers(data);
    console.log(data);
  };

  const getOneUserRequest = async () => {
    const { data } = await myApi.get(`/users/${inputId}`);
    setInputId("");
    setUsers([data]);
    console.log(data);
  };

  const postRequest = async () => {
    const { data } = await myApi.post("/users", {
      id: postId,
      cash: postCash,
      credit: postCredit
    });
    setPostId("");
    setPostCash("");
    setPostCredit("");
    console.log(data);
  };

  const depositRequest = async () => {
    console.log(depositId);
    
  }

  const renderUsers = () => {
    const result = users.map((element) => {
      return (
        <div key={element._id}>
          <h3>id: {element._id}</h3>
          <div>credit: {element.credit}</div>
          <div>cash: {element.cash}</div>
          {/* <button>deposit</button>
          <button>withdraw</button>
          <button>transfer</button>
          <button>update credit</button> */}
          <button>delete</button>
        </div>
      );
    });
    return result;
  };
  return (
    <div className="App">
      {/* {' '} */}
      <h1>Hello Bank!</h1>
      <button onClick={getRequest}>get all</button>
      <br />
      <br />
      <input
        type="text"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      <button onClick={getOneUserRequest}>get one</button>
      <br />
      <br />
      <label>
        id:
        <input
          type="text"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
      </label>
      <label>
        cash:
        <input
          type="text"
          value={postCash}
          onChange={(e) => setPostCash(e.target.value)}
        />
      </label>
      <label>
        credit:
        <input
          type="text"
          value={postCredit}
          onChange={(e) => setPostCredit(e.target.value)}
        />
      </label>
      <button onClick={postRequest}>post</button>
      <br />
      <br />
      <label>
        deposit to id:
        <input
          type="text"
          value={depositId}
          onChange={(e) => {
            setDepositId(e.target.value);
          }}
        />
      </label>
      <label>
        amount:
        <input
          type="number"
          value={depositAmount}
          onChange={(e) => {
            setDepositAmount(e.target.value);
          }}
        />
      </label>
      <button onClick={depositRequest}>deposit</button>
      {renderUsers()}
    </div>
  );
};

export default App;
