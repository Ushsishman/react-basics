import StarImg from "../assets/images/key-concepts.png";

const Heading = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={StarImg} alt="star" className="w-32" />
      <h1 className="text-4xl text-blue-300">Key React Concepts</h1>
      <p className="text-gray-300">
        Selected key React concepts you should know about
      </p>
    </div>
  );
};
export default Heading;
