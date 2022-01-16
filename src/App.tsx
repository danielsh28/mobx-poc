import './App.css';
import {StoreContext, useStore} from "./store";
import UserCard from "./UserCard";
import UsersList from "./UsersList";


function App() {
  const store = useStore();
  return (
    <div className="App">
      <StoreContext.Provider value={store}>
          <div style={{display:'flex', justifyContent:'center', marginTop:'100px'}}>
      <UserCard/>
      <UsersList/>
          </div>
      </StoreContext.Provider>

    </div>
  );
}

export default App;
