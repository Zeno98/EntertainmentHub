import Pagination from '@mui/material/Pagination';
import { color } from '@mui/system';
import "./CustomPagination.css"
let CustomPagination = ({
    setPage,
    pageNumber = 10
}) => {

    let handleChange = (page) => {
        setPage(page);
        window.scroll(0, 0)
    }

    return (
        <div className='pagination'>
            <Pagination
                count={pageNumber}
                onChange={(e) => handleChange(e.target.textContent)}// doubt?
                variant="outlined"
                color="secondary" />
        </div>
    )
}

export default CustomPagination;