export default function AppMain ({film, serie, linguaBandiera, generaStelle}){


  return (
    <main>
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
    </main>
  );
}
