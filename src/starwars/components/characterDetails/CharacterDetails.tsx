import "./CharacterDetails.css";
import { handleShare } from "../../../common/services/SharingService";

interface ICharacterDetailsProps {
  name?: string,
  gender?: string,
  birth_year?: string,
  height?: string
}

const currentUrl: string = window.location.href;



export default function CharacterDetails(props: ICharacterDetailsProps) {
  
  const handleShareClick = (props: ICharacterDetailsProps) => {
    handleShare(
      `Star Wars ${props.name ?? "name"}`,
      `Name: ${props.name ?? "name"}
      Gender: ${props.gender ?? "gender"}
      Birth Year: ${props.birth_year ?? "birth_year"}
      Height: ${props.height ?? "height"}`,
      currentUrl);
  }
  return (
    <div className="padding20">
      <p>Full name: {props.name ?? "name"}</p>
      <p>Gender: {props.gender ?? "gender"}</p>
      <p>Birth Year: {props.birth_year ?? "year"}</p>
      <p>Height: {props.height ?? "height"} cm</p>
      <button className="btn btn-secondary" onClick={() => handleShareClick(props)}>{"Share " + props.name}</button>
    </div>
  )
}