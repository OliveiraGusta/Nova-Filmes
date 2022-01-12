import { ReactComponent as Arrow } from "assets/img/arrow.svg"
import "./styles.css";
function Pagination() {
    return (
        <div className="novafilmes-pagination-container">
            <div className="novafilmes-pagination-box">
                <button className="novafilmes-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="novafilmes-pagination-button" disabled={false} >
                    <Arrow className="novafilmes-flip-horizontal" />
                </button>
            </div>
        </div>
    )

}

export default Pagination;