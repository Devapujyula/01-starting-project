// Traditional method of passing data to components using props

// function CoreConcept({props}) {
//   return <li>
//     <img src={props.componentsImg} alt={props.title} />
//     <h3>{props.title}</h3>
//     <p>{props.description}</p>
//   </li>
// }

// Objects Destructuring A way to pass data to components using props
export default function CoreConcept({image, title, description}) {
    return <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  }