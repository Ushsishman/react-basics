/* eslint-disable react/prop-types */
const Card = ({ name, text, img }) => {
  return (
    <div className="flex flex-col m-6 py-6 w-72 items-center justify-center bg-[#20014B] text-center text-blue-300 rounded shadow-lg  hover:shadow-slate-700">
      <img src={img} alt="img" className="w-24 m-3" />
      <h1 className="my-2 text-blue-300 text-xl">{name}</h1>
      <p className="mx-6 text-gray-300">{text}</p>
    </div>
  );
};
export default Card;
