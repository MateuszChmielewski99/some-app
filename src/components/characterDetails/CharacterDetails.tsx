import "./CharacterDetails.css"

interface CharacterDetailsProps {
  name: string | undefined, 
  gender: string | undefined, 
  birth_year: string | undefined, 
  height: string | undefined
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