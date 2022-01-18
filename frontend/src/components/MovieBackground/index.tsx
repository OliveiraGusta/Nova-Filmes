/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import "./styles.css";

type Props={
    movieId : string;
}

function MovieBackground({movieId}: Props) {

    const[movie, setMovie] = useState<Movie>();

    useEffect(()=>{
        axios.get(`${BASE_URL }/movies/${movieId}`)
        .then(response =>{
            setMovie(response.data);
        })
    },[movieId] );

    return (
        <div>
            <img id="image-background" src={movie?.image} />
        </div>
    );
}
export default MovieBackground;
