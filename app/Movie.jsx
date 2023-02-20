import Link from "next/link"
import Image from "next/image"

export default function Movie({title, releaseData, posterPath, id}){
    
    const imgPath = "https://image.tmdb.org/t/p/original"
    
    return(
        <div>
            <Link href={`/${id}`}>
                <Image src={imgPath + posterPath} width={800} height={800}/>
            </Link>
            <h1>Title : {title}</h1>
            <h3>Release data : {releaseData}</h3>
        </div>
    )
}