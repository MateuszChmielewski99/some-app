import { Tab, Tabs } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import Character from "../models/Character"
import { getById } from "../services/SWService";
import characters from "../data/CharacterDictionary";
import CharacterDetails from "../components/characterDetails/CharacterDetails";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { readLocalStorage, writeLocalStorage } from "../../common/services/LocalStorageService";
import { useParams, useNavigate } from "react-router-dom";
import useDelayedCall from "../../common/hooks/useDelayedCall";

export default function SwCharacters() {
  const navigate = useNavigate();
  const { tabKey } = useParams<{ tabKey: string }>();
  const [key, setKey] = useState(tabKey ?? readLocalStorage('lastTab') ?? 'luke');

  const [call, character, isLoading, error] = useDelayedCall<Character>(async () => await getById('people', characters.get(key)));

  useEffect(() => {
    const fetchData = async () => {
      call();

      const urlSplit: string[] = window.location.href.split('/');
      if (urlSplit.length === 5)
        navigate(`/starwars/${key}`);

      writeLocalStorage('lastTab', key);
    };

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
