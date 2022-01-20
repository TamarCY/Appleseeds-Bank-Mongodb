import myApi from "./api/Api"

function App() {

  const getReq = async () => {
    const {data} = await myApi.get("/users");
    console.log(data);
  }

  return (
    <div className="App">
      {' '}
      <div> Welcome to the bank! </div>
      <button onClick={getReq}>get</button>
    </div>
  );
}

export default App;
