import './index.css'

const ReviewCard = props => {
    const {details} = props 
    const {name, id, review} = details
    return (
        <li className='review-item'>
            <h4 className='review-name'>{name}</h4>
            <hr/>
            <p className='review'>{review}</p>
        </li>
    )
}
export default ReviewCard