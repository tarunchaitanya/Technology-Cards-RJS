// Write your code here.
import './index.css'

const TechnologyComponent = props => {
  const {techDetails} = props
  const {title, description, imgUrl, className} = techDetails

  return (
    <li className={`${className} card-container`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechnologyComponent
