import Image from "next/image";

export default async function MovieDetail({params}){
    const {movie} = params
    const imgPath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revaidate: 0}})
    const res = await data.json();

    return(
        <div>
            <Image className="my-4 w-full" src={imgPath + res.backdrop_path} width={800} height={800}/>
            <h1>Title : {res.title}</h1>
            <h3>Release data : {res.release_date}</h3>
            <h3>Runtime : {res.runtime} Mins</h3>
            <h3>Overview : {res.overview} Mins</h3>
            <h3 className="text-sm bg-green-600 inline-block my-4" >{res.status}</h3>
        </div>
    )
}