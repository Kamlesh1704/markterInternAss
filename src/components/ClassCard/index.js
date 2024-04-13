import ReactPlayer from 'react-player'
import './index.css'

const ClassCard = props => {
    const {details} = props
    const {videoUrl, title, description} = details
    return (
        <li className='listItem'>
            <ReactPlayer url={videoUrl} controls height={300} width="100%" />
            <div className='title-desc'>
                <h2 className='title'>{title}</h2>
                <p className='disc'>{description}</p>
                <button type="button" className='practice-button'>
                    PRACTICE
                </button>
            </div>
        </li>
    )
}

export default ClassCard