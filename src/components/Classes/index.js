import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import ClassCard from '../ClassCard'
import './index.css'

const classList = [
    { 
        id: uuidv4(),
        title: "1 Day 1 Chapter: Biodiversity and Conservation in one shot | NEET 2024 | Seep Pahuja",
        videoUrl: "https://www.youtube.com/watch?v=VmD8-zbVMpw",
        description: "Get ready to accelerate your NEET preparation with our 45 Days crash course a comprehensive series designed to boost your understanding and mastery of key concepts, ensuring your selection the upcoming NEET 2024 exams.",
    },
    {
        id: uuidv4(),
        title: "BIODIVERSITY AND CONSERVATION in 48 Minutes | Full Chapter Revision | Class 12th NEET",
        videoUrl: "https://www.youtube.com/watch?v=d46krlK-pdU",
        description: "🌿📚 Dive into the rich tapestry of BIODIVERSITY AND CONSERVATION in just 48 MINUTES! 🚀 Tailored for Class 12th NEET, this comprehensive session covers the entire chapter, ensuring a thorough revision. ",
    },
    {
        id: uuidv4(),
        title: "Animal Kingdom in One Shot | 45 Days Crash Course | NEET 2024 | Seep Pahuja",
        videoUrl: "https://www.youtube.com/watch?v=dGAsJBs8jps",
        description: "Call Seep Pahuja's team on 8585858585 and take your NEET UG Preparations to the next level.",
    },
    {
        id: uuidv4(),
        title: "1 Day 1 Chapter: Ecosystem in One Shot | 45 Days Course | NEET 2024 | Seep Pahuja",
        videoUrl: "https://www.youtube.com/watch?v=Jozfb0GJhOs",
        description: "Get ready to accelerate your NEET preparation with our 45 Days crash course a comprehensive series designed to boost your understanding",
    },
]
const Classes = () => (
    <>
      <Header />
      <ul className='class-list'>
        {classList.map(eachClass => <ClassCard details={eachClass} key={eachClass.id} />)}
      </ul>
      <p className='number'>1 2 3 4 5</p>
    </>
)
export default Classes