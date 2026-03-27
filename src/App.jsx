import { useState } from 'react'

// importo immagini
import uk from './assets/uk.png'
import it from './assets/ita.png'
import fr from './assets/francia.svg'
import es from './assets/spagna.svg'
import de from './assets/germania.png'
import ja from './assets/giappone.jpg'
import zh from './assets/cina.svg'
import ru from './assets/russia.svg'



function App() {
  const apiKey = import.meta.env.VITE_API_KEY

  const [cerca, setCerca] = useState('') //testo che l’utente scrive nella barra di ricerca

  const [film, setFilm] = useState([]) // array risultati ricerca film
  const [serie, setSerie] = useState([]); //array risultati ricerca serie

  const cercaFilm = () => {

    const urlFilm = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${cerca}`
    const urlSerieTv = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${cerca}&language=it_IT`

    fetch(urlFilm)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFilm(data.results) //salvo i risultati 
      })

      
    fetch(urlSerieTv)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setSerie(data.results) //salvo i risultati 
      })


  }


  //  Trasformiamo la stringa statica della lingua in una vera e propria bandiera della
  //  nazione corrispondente
  //  gestendo il caso in cui non abbiamo la bandiera della
  //  nazione ritornata dall API

const linguaBandiera = (lingua) => {

  const bandiere = {
    en: uk,
    it: it,
    fr: fr,
    es: es,
    de: de,
    ja: ja,
    zh: zh,
    ru: ru,
  }

  const bandieraTrovata = bandiere[lingua]

  // Se bandiera trovata
  if (bandieraTrovata) {
    return <img src={bandieraTrovata} alt={lingua} className='bandiere' />
  }

  // Se bandiera non trovata
  return <span>{lingua}</span>
}






//-Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5-

//stampare a schermo un numero di stelle piene che vanno da 1 a 5
//lasciando le restanti vuote
//Arrotondiamo sempre per eccesso all unità successiva
//non gestiamo icone mezze piene

const generaStelle = (voto) => {
  const stelle = Math.ceil(voto / 2) // da 1-10 a 1-5 arrotondando per eccesso
  const stelleArray = []

  for (let i = 0; i < 5; i++) {
    if (i < stelle) {
      stelleArray.push(<i key={i} className="fa-solid fa-star"></i>)
    } else {
      stelleArray.push(<i key={i} className="fa-regular fa-star"></i>)
    }
  }

  return stelleArray
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

             {/*
             - Aggiungiamo la copertina del film o della serie-
            
             Ci viene passata dall API solo la parte finale dell URL
             Prendere quindi l URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare
             Poi aggiungere la parte finale dell URL passata dall API
             */}

            <img src={`https://image.tmdb.org/t/p/w185${film.poster_path }`}/>



            <p><strong>Titolo originale:</strong> {film.original_title}</p>
            <p><strong>Lingua:</strong> {linguaBandiera(film.original_language)}</p>
            <p><strong>Voto:</strong>{generaStelle(film.vote_average)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

