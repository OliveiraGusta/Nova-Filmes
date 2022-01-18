import FormCard from "components/FormCard";
import MovieBackground from "components/MovieBackground";
import { useParams } from "react-router-dom";


function Form() {

    const params = useParams();

    return (
        <div>
            <MovieBackground movieId={`${params.movieId}`} />
            <FormCard movieId={`${params.movieId}`} />
           
        </div>
        
    );
}
export default Form;