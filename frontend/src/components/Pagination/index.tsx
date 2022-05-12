import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./styles.css"

export const Pagination: any = () => {
return(
    <div className="dsmovie-pagination-container">
        <div className="dsmovie-pagination-box">
            <button className="dsmovie-pagination-button" disabled={true} >
                <BsChevronLeft />
            </button>
            <p>{`${1} de ${3}`}</p>
            <button className="dsmovie-pagination-button" disabled={false} >
                <BsChevronRight />
            </button>
        </div>
    </div>
)
}