import './App.css'
import useUserStore from './useUserStore'
import { useCounterStore } from './useCounterStore';
function App() {

  const user = useUserStore(state => state.user);
  const login = useUserStore(state => state.login);
  const logout = useUserStore(state => state.logout);
  const updateProfile = useUserStore(state => state.updateProfile);
  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  const count = useCounterStore((state: any)=> state.count)
  const { increment, decrement, reset } = useCounterStore();

  const handleUpdateName = () => {
    const newName = prompt('შეიყვანეთ ახალი სახელი:', user?.name);
    if (newName) {
      updateProfile({ name: newName });
    }
  }
  return (
    <>
      <div>
        <h1>Please Login</h1>
        <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
        {isLoggedIn ? (
          <div>
            <h2>Logined</h2>
            <h2>{user?.name}</h2>
            <p>{user?.email} - {user?.createdAt}</p>
            <button onClick={handleUpdateName}>Update profile</button>
          </div>
        ) : (
          <div>
            <h2>loged out</h2>
          </div>
        )
      }
      </div>    
      <div>
          <h2>Count: {count}</h2>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
          <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default App
