
function Pagination({ reviewsPerPage, totalReviews, paginate }) {
const pageNumbers = []

for(let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
}
    
return (
<div>
    {pageNumbers.map(number => (
    <button key={number} onClick={() => paginate(number)} className='border-0 bg-white px-1'>
        {number}
    </button>
    ))}
</div> )
}

export default Pagination