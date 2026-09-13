import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SearchData({ setPokemon }) {
  const [name, setName] = useState("");
  const search = async (e) => {
    e.preventDefault();
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await resp.json();
    console.log(data);
    const speciesResp = await fetch(data.species.url);
    const speciesData = await speciesResp.json();
    const description = speciesData.flavor_text_entries.find(
      (lang) => lang.language.name === "en",
    )?.flavor_text;
    setPokemon({ ...data, description });
    console.log(description);
  };

  return (
    <div className="searchbox" id="search">
      <p>SEARCH POKEMON</p>
      <form className="inputText" onSubmit={search}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value.toLowerCase())}
          placeholder="Enter Pokemon Name..."
        />
        <FontAwesomeIcon
          className="icon"
          onClick={search}
          icon={faMagnifyingGlass}
        />
      </form>
    </div>
  );
}
