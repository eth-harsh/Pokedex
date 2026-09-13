const Data = [
  { id: 1, name: "Bulbasaur", src: "public/balbasaaur.png" },
  { id: 6, name: "Charizard", src: "public/charigard.png" },
  { id: 11, name: "Metapod", src: "public/metapod.png" },
  { id: 23, name: "Ekans", src: "public/ekans.png" },
  { id: 24, name: "Arbok", src: "public/arbok.png" },
  { id: 25, name: "Bulbasaur", src: "public/balbasaaur.png" },
  { id: 91, name: "Metapod", src: "public/metapod.png" },
  { id: 73, name: "Ekans", src: "public/ekans.png" },
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
