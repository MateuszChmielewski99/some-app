import { Tab, Tabs } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import Character from "../../models/Character";
import SWServiceClass from "../../services/SWService";
import characters from "../../data/CharacterDictionary";
import CharacterDetails from "../../components/characterDetails/CharacterDetails";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

export default function SwCharacters() {
  return (
    <TabController />
  );
};

const TabController = () => {
  const [key, setKey] = useState('luke');
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<Character>();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const character = await SWServiceClass.fetchCharacter(characters.get(key)!);
      setCharacter(character);
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
              {isLoading ? <LoadingSpinner /> : <CharacterDetails name={character?.name} gender={character?.gender} birth_year={character?.birth_year} height={character?.height} />}
            </Tab>
            <Tab eventKey="leia" title="Leia">
              {isLoading ? <LoadingSpinner /> : <CharacterDetails name={character?.name} gender={character?.gender} birth_year={character?.birth_year} height={character?.height} />}
            </Tab>
            <Tab eventKey="han" title="Han">
              {isLoading ? <LoadingSpinner /> : <CharacterDetails name={character?.name} gender={character?.gender} birth_year={character?.birth_year} height={character?.height} />}
            </Tab>
            <Tab title="Custom">
            </Tab>
          </Tabs>
    </Fragment>
  );
};
