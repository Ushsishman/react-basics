import Heading from "./components/Heading";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="p-0 m-0 min-h-screen w-full flex items-center justify-center bg-[#170E21]">
      <div>
        <Heading />
        <Cards />
      </div>
    </div>
  );
}

export default App;
