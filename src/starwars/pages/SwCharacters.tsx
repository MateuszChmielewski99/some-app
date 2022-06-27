import { Tab, Tabs } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import Character from "../models/Character"
import { getById } from "../services/SWService";
import characters from "../data/CharacterDictionary";
import CharacterDetails from "../components/characterDetails/CharacterDetails";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { readLocalStorage, writeLocalStorage } from "../../common/services/LocalStorageService";
import { useParams, useNavigate } from "react-router-dom";

export default function SwCharacters() {
  const navigate = useNavigate();
  const { tabKey } = useParams<{ tabKey: string }>();
  const [key, setKey] = useState(tabKey ?? readLocalStorage('lastTab') ?? 'luke');
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<Character>();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const sendTime = Date.now();
      const character = await getById('people', characters.get(key));
      const receiveTime = Date.now();
      const responseTime = receiveTime - sendTime;

      const urlSplit: string[] = window.location.href.split('/');
      if (urlSplit.length === 5)
        navigate(`/starwars/${key}`);

      writeLocalStorage('lastTab', key);
      setCharacter(character);
      if (responseTime < 3000)
        setTimeout(() => setIsLoading(false), 3000 - responseTime);
      else
        setIsLoading(false);
    }

    fetchData();
  }, [key]);

  return (
    <Fragment>
      <Tabs id='tab-controller'
        activeKey={key}
        onSelect={(k) => setKey(k as string)}
        className='mb-3'>
        <Tab eventKey="luke" title="Luke">
          {isLoading ? <LoadingSpinner /> : character ? <CharacterDetails name={character.name} gender={character.gender} birth_year={character.birth_year} height={character.height} /> : <>No Data</>}
        </Tab>
        <Tab eventKey="leia" title="Leia">
          {isLoading ? <LoadingSpinner /> : character ? <CharacterDetails name={character.name} gender={character.gender} birth_year={character.birth_year} height={character.height} /> : <>No Data</>}
        </Tab>
        <Tab eventKey="han" title="Han">
          {isLoading ? <LoadingSpinner /> : character ? <CharacterDetails name={character.name} gender={character.gender} birth_year={character.birth_year} height={character.height} /> : <>No Data</>}
        </Tab>
        <Tab title="Custom">
        </Tab>
      </Tabs>
    </Fragment>
  );
};
