import Feed from "./components/Feed.jsx";
import RightBar from "./components/RightBar.jsx";
import LeftBar from "./components/LeftBar.jsx";

function App() {
  return (
    <div className=" bg-white dark:bg-black">
      <main className="mx-auto flex min-h-screen max-w-[1400px] justify-center">
        <LeftBar />
        <Feed />
        <RightBar />
      </main>
    </div>
  );
}

export default App;
