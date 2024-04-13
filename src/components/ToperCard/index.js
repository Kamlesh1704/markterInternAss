import './index.css'
const ToperCard = props => {
    const {details} = props
    const {id, description, name, imageUrl} = details
    return (
      <li className="topper-card">
        <img src={imageUrl} className='topper-img'/>
        <div className='name-and-desc-div'>
          <h4 className='topper-name'>{name}</h4>
          <p className='topper-desc'>{description}</p>
        </div>
      </li>
    )
}

export default ToperCard