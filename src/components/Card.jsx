import "./styles/Card.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;
  // const dispatch = useDispatch()
  // dispatch(addFav({}))
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className="card">
      <button className="closeButton" onClick={() => onClose(id)}>
        ❌
      </button>
      {isFav ? (
        <button class="fav" onClick={handleFavorite}>
          💖
        </button>
      ) : (
        <button class="fav" onClick={handleFavorite}>
          🤍
        </button>
      )}

      <Link to={`/detail/${id}`} className="stylename">
        <h2 className="stylename">{name}</h2>
        ⬇️
      </Link>
      <h2> {status}</h2>
      <h2 className="h2gender">{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
function mapStateToProp(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    addFav: (ch) => dispatch(addFav(ch)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProp, mapDispatchToProp)(Card);
