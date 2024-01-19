import HeaderMenu from "../Component/HeaderMenu";
import TaskList from "../Component/TaskList";
import Timer from "../Component/Timer";

const Home = () => {
  return (
    <div className="Home">
      <HeaderMenu/>
      <Timer/>
      <TaskList />
    </div>
  );
}

export default Home;
