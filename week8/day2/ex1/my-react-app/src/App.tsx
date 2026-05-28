import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <Greeting name="Nikol" messageCount={5} />

      <Counter />

      <UserCard name="Nikol" age={21} role="Developer" />

      <UserCard name="Alex" />

      <UserCard />

      <UserList />
    </div>
  );
}

export default App;
