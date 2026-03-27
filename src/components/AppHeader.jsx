export default function AppHeader ({ cerca, setCerca, cercaFilm }){


  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
      <h1 className="m-0">Boolflix</h1>

      <div className="d-flex gap-2">
        <input
        className="form-control"
        type="text"
        value={cerca}
        onChange={(event) => setCerca(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && cercaFilm()}
        />
        <button className="btn btn-danger" onClick={cercaFilm}>Cerca</button>
      </div>
    
    </header>
  );


}


