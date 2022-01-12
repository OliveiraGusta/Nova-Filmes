import MovieStars from "components/MovieStars";
import "./styles.css";
function MovieScore(){

    const score = 3.5;
    const count = 13;

    return (
        <div className="novafilmes-score-container">
            <p className="novafilmes-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="novafilmes-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;