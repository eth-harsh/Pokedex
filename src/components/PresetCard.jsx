const Data = [
  { id: 1, name: "Bulbasaur", src: `${import.meta.env.BASE_URL}balbasaaur.png` },
  { id: 6, name: "Charizard", src: `${import.meta.env.BASE_URL}charigard.png` },
  { id: 11, name: "Metapod", src: `${import.meta.env.BASE_URL}metapod.png` },
  { id: 23, name: "Ekans", src: `${import.meta.env.BASE_URL}ekans.png` },
  { id: 24, name: "Arbok", src: `${import.meta.env.BASE_URL}arbok.png` },
  { id: 25, name: "Bulbasaur", src: `${import.meta.env.BASE_URL}balbasaaur.png` },
  { id: 91, name: "Metapod", src: `${import.meta.env.BASE_URL}metapod.png` },
  { id: 73, name: "Ekans", src: `${import.meta.env.BASE_URL}ekans.png` },
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
