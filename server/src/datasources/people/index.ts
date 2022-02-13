import { RESTDataSource } from 'apollo-datasource-rest';
import dotenv from 'dotenv';

dotenv.config();

type APIDataType = {
  count: number;
  next: string;
  previous: string;
  results: APIPersonDataType[];
};

export type APIPersonDataType = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

type PeopleData = {
  count: number;
  next: string;
  previous: string;
  people: Person[];
};

type Person = {
  name: string;
  height: string;
  gender: string;
  mass: string;
  homeworld: string;
};

export class PeopleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_BASE;
  }

  getPeopleData(peopleData: APIDataType): PeopleData {
    return {
      count: peopleData.count,
      next: peopleData.next,
      previous: peopleData.previous,
      people: peopleData.results?.map((person) => this.getPerson(person)),
    };
  }

  getPerson(person: APIPersonDataType): Person {
    return {
      name: person.name,
      height: person.height,
      gender: person.gender,
      mass: person.mass,
      homeworld: person.homeworld,
    };
  }

  async getAllPeople(page: number = 1, search: string = '') {
    const response = await this.get('people', { page, search });

    return this.getPeopleData(response);
  }

  async getPersonByName(name: string) {
    const response = await this.get('people', { search: name });

    if (response.results.length == 0) return;

    return response.results[0];
  }
}
