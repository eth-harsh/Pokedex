export default function PokeData({ pokemon }) {
  if (!pokemon) return null;
  const [firstWord, ...rest] = pokemon.description.split(" ");

  return (
    <div className="pokedata">
      <div className="imgbox" style={{ gridArea: "box1" }}>
        <img src={pokemon.sprites.front_default} />
        <p style={{ color: "red" }}>
          NAME: <span style={{ color: "#333" }}></span>{" "}
          {pokemon.name.toUpperCase()}
        </p>
      </div>
      <div className="statbox" style={{ gridArea: "box2" }}>
        <div className="description">
          <p className="poke-description">
            <span style={{ color: "red" }}>{firstWord}</span>{" "}
            <span>{rest.join(" ")}</span>
          </p>
        </div>
        <p>
          TYPES: <span style={{ color: "red" }}></span>
          {pokemon.types[0].type.name.toUpperCase()}
        </p>
        <p>
          ID: <span style={{ color: "grey" }}></span>
          {pokemon.id}
        </p>
        <p>
          {" "}
          Height: <span style={{ color: "grey" }}></span> {pokemon.height}
        </p>
        <p>
          {" "}
          Weight: <span style={{ color: "grey" }}></span> {pokemon.weight}
        </p>
      </div>
      <div className="evolutionbox" style={{ gridArea: "box3" }}></div>
    </div>
  );
}
