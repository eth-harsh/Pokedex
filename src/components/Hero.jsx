export default function Hero() {
  return (
    <div className="hero">
      <video
        src="/waterfall.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></video>
      <div className="hero-content">
      <h1>LIFE IS A JOURNEY</h1>
      </div>
    </div>
  );
}
