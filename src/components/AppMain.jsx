export default function AppMain ({film, serie, linguaBandiera, generaStelle}){


  return (
    <main className="my-4">
      <div className="row g-4">
        {film.map((film) => (
          <div key={film.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm position-relative overflow-hidden">
              <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}className="card-img-top" />

              <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center overlay">
                <h5 className="card-title text-white p-1">{film.title}</h5>
                <p className="card-text text-white p-3"><strong>Titolo originale:</strong> {film.original_title}</p>
                <p className="card-text text-white p-3"><strong>Lingua:</strong> {linguaBandiera(film.original_language)}</p>
                <p className="card-text text-white p-3"><strong>Voto:</strong> {generaStelle(film.vote_average)}</p>
                <p className="card-text text-white p-3">{film.overview}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
