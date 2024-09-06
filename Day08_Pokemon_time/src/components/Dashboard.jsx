import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const select = useSelector((state) => state.pokemonSlice.select);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        marginBottom: "100px",
      }}
    >
      {select.map((el, index) => {
        return (
          <PokemonCard
            key={index}
            img={el.img_url}
            name={el.korean_name}
            type={el.types}
            id={el.id}
            content={el.description}
            isSelect={false}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
