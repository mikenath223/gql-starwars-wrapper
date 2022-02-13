import gql from 'graphql-tag';

export const GET_PEOPLE_DATA = gql`
  query GetPeopleData($page: Int, $search: String) {
    peopleData(page: $page, search: $search) {
      count
      people {
        name
        height
        gender
        mass
        homeworld
      }
    }
  }
`;

export const GET_PERSON_DETAILS_BY_NAME = gql`
  query GetPersonDetails($name: String!) {
    person(name: $name) {
      name
      height
      mass
      hairColor
      skinColor
      eyeColor
      birthYear
      gender
      homeworld
      films
      species
      vehicles
      starships
      created
      edited
    }
  }
`;
