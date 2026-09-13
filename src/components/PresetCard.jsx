const Data = [
  { id: 1, name: "Bulbasaur", src: "/assets/balbasaaur.png" },
  { id: 6, name: "Charizard", src: "/assets/charigard.png" },
  { id: 11, name: "Metapod", src: "/assets/metapod.png" },
  { id: 23, name: "Ekans", src: "/assets/ekans.png" },
  { id: 24, name: "Arbok", src: "/assets/arbok.png" },
  { id: 25, name: "Bulbasaur", src: "/assets/balbasaaur.png" },
  { id: 91, name: "Metapod", src: "/assets/metapod.png" },
  { id: 73, name: "Ekans", src: "/assets/ekans.png" },
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
