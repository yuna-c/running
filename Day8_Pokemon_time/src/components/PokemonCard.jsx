import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAdd, onDelete } from "../rtk/slice/pokemonSlice";

const PokemonCard = ({ img, name, type, id, isSelect }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      style={{ border: "2px solid black" }}
      onClick={() => navigate(`/detail?id=${id}`)}
    >
      <img src={img} alt="pokemon_img" />
      <p>{name}</p>
      <p>{type}</p>
      {isSelect ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(onAdd(id));
          }}
          style={{ border: "1px solid blue" }}
        >
          추가
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(onDelete(id));
          }}
          style={{ border: "1px solid blue" }}
        >
          삭제
        </button>
      )}
    </div>
  );
};

export default PokemonCard;
