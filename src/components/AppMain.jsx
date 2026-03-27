export default function AppMain ({film, serie, linguaBandiera, generaStelle}){


  return (
    <main className="my-4">
      <div className="row g-4">
        {film.map((film) => (
          <div key={film.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}className="card-img-top" />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{film.title}</h5>
                  <p className="card-text mb-2"><strong>Titolo originale:</strong>{film.original_title}</p>
                  <p className="card-text mb-2"><strong>Lingua:</strong>{linguaBandiera(film.original_language)}</p>
                  <p className="card-text mt-auto"><strong>Voto:</strong>{generaStelle(film.vote_average)}</p>
                </div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
