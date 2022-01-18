import MovieStars from "components/MovieStars";
import "./styles.css";

type Props ={
    score: number;
    count: number;
}

function MovieScore({score, count} : Props){

    return (
        <div className="novafilmes-score-container">
            <p className="novafilmes-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            <p className="novafilmes-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;