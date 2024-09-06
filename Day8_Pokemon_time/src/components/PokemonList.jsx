import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {MOCK_DATA.map((el, index) => {
        return (
          <PokemonCard
            key={index}
            img={el.img_url}
            name={el.korean_name}
            type={el.types}
            id={el.id}
            content={el.description}
            isSelect={true}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
