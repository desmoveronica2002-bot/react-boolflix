import { useState } from 'react'



function App() {
  const apiKey = import.meta.env.VITE_API_KEY

  const [cerca, setCerca] = useState('') //testo che l’utente scrive nella barra di ricerca
  const [film, setFilm] = useState([]) // array risultati ricerca film

  const cercaFilm = () => {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${cerca}`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFilm(data.results) //salvo i risultati 
      })
  }



  //  Trasformiamo la stringa statica della lingua in una vera e propria bandiera della
  //  nazione corrispondente
  //  gestendo il caso in cui non abbiamo la bandiera della
  //  nazione ritornata dall API

  const linguaBandiera = (lingua) => {
    const lingue = {

    }
  }


  return (
    <div className="container">
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


      <div>
        {film.map((film) => (
          <div key={film.id}>
            <h3>{film.title}</h3>
            <p><strong>Titolo originale:</strong> {film.original_title}</p>
            <p><strong>Lingua:</strong> {linguaBandiera(film.original_language)}</p>
            <p><strong>Voto:</strong> {film.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App