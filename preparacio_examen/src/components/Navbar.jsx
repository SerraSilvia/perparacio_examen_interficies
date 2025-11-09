export default function Navbar({ setPagina }) {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>
      <button onClick={() => setPagina("home")} style={{ marginRight: "10px" }}>Home</button>
      <button onClick={() => setPagina("formulari")} style={{ marginRight: "10px" }}>Formulari</button>
      <button onClick={() => setPagina("pastissos")} style={{ marginRight: "10px" }}>Pastissos</button>
      <button onClick={() => setPagina("formulariPastis")}>Formulari Pastís</button>
    </nav>
  );
}
