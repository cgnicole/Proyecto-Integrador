import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFav } from "../redux/actions";
import "./styles/Favorites.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  const handleRemoveFavorite = (id) => {
    dispatch(removeFav(id));
  };

  return (
    <div className="favorites_contener">
      {favorites.map(({ id, name, image }) => {
        return (
          <div key={id} className="fav-card">
            <h2 className="namefav">{name}</h2>
            <div>
              <button
                className="buttondelatefav"
                onClick={() => handleRemoveFavorite(id)}
              >
                Eliminar de favoritos
              </button>
            </div>
            <img className="imgfav" src={image} alt={name} />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
