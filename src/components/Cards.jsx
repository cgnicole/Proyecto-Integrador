import Card from "./Card";
import "./styles/Cards.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className="cards_container">
      {characters &&
        characters.map((element, index) => {
          return (
            <Card
              Key={index}
              id={element.id}
              name={element.name}
              // status={element.status}
              species={element.species}
              // gender={element.gender}
              // origin={element.origin.name}
              image={element.image}
              onClose={onClose}
            ></Card>
          );
        })}
    </div>
  );
}
// {
//   favorites.map(({ id, name, status, species, gender, image }) => {
//     return (
//       <Card
//         key={id}
//         id={id}
//         name={name}
//         status={status}
//         species={species}
//         gender={gender}
//         image={image}
//       />
//     );
//   });
// }
