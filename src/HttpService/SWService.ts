import Character from "../models/Character";

class SWServiceClass {
  
  async fetchCharacter(id: number) : Promise<Character> {
    const url = 'https://swapi.dev/api/people/' + id;
    const options = {
      method: 'GET'
    };

    const result = await fetch(url, options).then(res => res.json());

    return result;
  }
}

export default new SWServiceClass;