import Card from "./Card";
import Components from "../assets/images/components.png";
import State from "../assets/images/state.png";
import Events from "../assets/images/events.png";

const Cards = () => {
  const data = [
    {
      name: "COMPONENTS",
      text: "Componenets let you split the UI into independent, reusable pieces, and think about each piece in isolation.Components can recieve data via props, and they can render dynamic output using JSX.",
      img: Components,
    },
    {
      name: "STATE",
      text: "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
      img: State,
    },
    {
      name: "EVENTS",
      text: "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
      img: Events,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row mt-12 items-center">
      {data.map((card) => {
        return (
          <Card key={card} name={card.name} text={card.text} img={card.img} />
        );
      })}
    </div>
  );
};
export default Cards;
