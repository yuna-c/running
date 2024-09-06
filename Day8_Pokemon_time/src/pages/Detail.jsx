import { useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const Detail = () => {
  const [params] = useSearchParams();
  const paramId = params.get("id");
  const detailPokemon = MOCK_DATA.find((el) => el.id === +paramId);

  return (
    <div>
      <img src={detailPokemon.img_url} alt="pokemon_img" />
      <p>{detailPokemon.korean_name}</p>
      <p>{detailPokemon.types}</p>
      <p>{detailPokemon.description}</p>
    </div>
  );
};

export default Detail;
