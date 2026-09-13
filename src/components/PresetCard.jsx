const Data = [
  { id: 1, name: "Bulbasaur", src: "/balbasaaur.png" },
  { id: 6, name: "Charizard", src: "charigard.png" },
  { id: 11, name: "Metapod", src: "/metapod.png" },
  { id: 23, name: "Ekans", src: "ekans.png" },
  { id: 24, name: "Arbok", src: "arbok.png" },
  { id: 25, name: "Bulbasaur", src: "/balbasaaur.png" },
  { id: 91, name: "Metapod", src: "/metapod.png" },
  { id: 73, name: "Ekans", src: "ekans.png" },
];

export default function PreSetCard() {
  return (
    <div className="presetCard">
      {Data.map((item) => (
        <div className="presetCardComp" key={item.id}>
          <img src={item.src} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}
