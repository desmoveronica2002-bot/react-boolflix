export default function AppHeader ({ cerca, setCerca, cercaFilm }){


  return (
    <header>
        <h1>Boolflix</h1>
        <div>
           <input
              type="text"
              value={cerca}
              onChange={(event) => setCerca(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && cercaFilm()}
           />
           <button onClick={cercaFilm}>Cerca</button>
        </div>
    </header>
  );
}
