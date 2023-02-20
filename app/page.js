import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res  = await data.json();
  // console.log(res);
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid m-10">
      {res.results.map((movie) => {
        return <Movie 
          id={movie.id}
          key={movie.id}
          title={movie.title} 
          releaseData={movie.release_date}
          posterPath={movie.poster_path}
        />
      })}
      </div>  
    </main>
  )
}
