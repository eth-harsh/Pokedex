import PokeData from "./PokeData";
import SearchData from "./Search";

export default function SearchedData({ pokemon, setPokemon }) {
  return (
    <div className="searchedDataBox">
      <SearchData setPokemon={setPokemon}></SearchData>
      <PokeData pokemon={pokemon}></PokeData>
    </div>
  );
}
