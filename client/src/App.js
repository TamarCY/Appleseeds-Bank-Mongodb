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
    console.log("id:",inputId);
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
    const response = await myApi.put("/users/deposit", {
      id: depositId,
      amount: depositAmount
    });
    console.log(response);
  };

  const renderUsers = () => {
    const result = users.map((element) => {
      return (
        <div key={element._id} className="card">
          <div className="content">
          <div className="header">{element._id}</div>
          <div>credit: {element.credit}</div>
          <div>cash: {element.cash}</div>
          </div>
          <button className="ui bottom attached button">delete</button>
        </div>
      );
    });
    return result;
  };
  return (
    <div className="App">
      <div className="App ui raised very padded text container segment">
        <h1 className="ui dividing header">Hello Bank!</h1>
        <button className="ui button" onClick={getRequest}>
          Get all users
        </button>
        <br />
        <br />
        <div className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="Enter bank user Id"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
            />
          </div>
          <button className="ui button" onClick={getOneUserRequest}>
            Get user
          </button>
        </div>
        <br />
        <br />
        <h3 className="ui dividing header">Add new user</h3>
        <div className="ui form">
          <div className="fields">
            <div className="field">
              <label>id </label>
              <input
                type="text"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
              />
            </div>
            <div className="field">
              <label>cash</label>
              <input
                type="text"
                value={postCash}
                onChange={(e) => setPostCash(e.target.value)}
              />
            </div>
            <div className="field">
              <label>credit</label>
              <input
                type="text"
                value={postCredit}
                onChange={(e) => setPostCredit(e.target.value)}
              />
            </div>
          </div>
          <button className="ui button" onClick={postRequest}>
            post
          </button>
        </div>
        <br />
        <br />
        <h3 className="ui dividing header">Deposit</h3>
        <div className="ui form">
          <div className="fields">
            <div className="field">
              <label>id </label>
              <input
                type="text"
                value={depositId}
                onChange={(e) => {
                  setDepositId(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <label>amount</label>
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => {
                  setDepositAmount(e.target.value);
                }}
              />
            </div>
          </div>
          <button className="ui button" onClick={depositRequest}>
            deposit
          </button>
        </div>
        <br/>
        <div className="ui cards">{renderUsers()}</div>
      </div>
    </div>
  );
};

export default App;
