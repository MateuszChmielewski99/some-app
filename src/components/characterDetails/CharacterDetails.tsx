import "./CharacterDetails.css"

interface CharacterDetailsProps {
  name: string, 
  gender: string, 
  birth_year: string, 
  height: string
}

export default function CharacterDetails(props:CharacterDetailsProps) {
  return (
    <div className="padding20">
      <p>Full name: {props.name ?? "name"}</p>
      <p>Gender: {props.gender ?? "gender"}</p>
      <p>Birth Year: {props.birth_year ?? "year"}</p>
      <p>Height: {props.height ?? "height"} cm</p>
    </div>
  )
}