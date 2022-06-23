import Character from "../models/Character";
const baseUrl = "https://swapi.dev/api";

export async function getById(collection: string, id: number | undefined) : Promise<Character> {
  const fullUrl: string = baseUrl + '/' + collection + '/' + id;
  const response = await fetch(fullUrl,
    {
      method: 'GET'
    }).then(res => res.json());

  return response;
}