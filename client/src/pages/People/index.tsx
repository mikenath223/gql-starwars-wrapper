import { debounce } from 'debounce';
import React, { useMemo, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import starwarslogo from '../../resources/starwarslogo.png';
import { Input } from '../../components/Input';
import { NotFound } from '../../components/NotFound';
import { PageLayout } from '../../components/PageLayout';
import { Pagination } from '../../components/Pagination';
import { PersonCard, Person } from '../../components/PersonCard';
import { Snackbar } from '../../components/Snackbar';
import { Spinner } from '../../components/Spinner';
import {
  InnerHeaderWrapper,
  Header,
  SearchbarWrapper,
  SectionWrapper,
  InnerSectionWrapper,
  PeopleWrapper,
  LogoWrapper,
  LogoText,
  PaginationWrapper,
} from './styles';

export const GET_PEOPLE_DATA = gql`
  query GetPeopleData($page: Int, $search: String) {
    peopleData(page: $page, search: $search) {
      ... on PeopleData {
        count
        people {
          name
          height
          gender
          mass
          homeworld
        }
      }
      ... on NotFoundError {
        errorMessage
      }
    }
  }
`;

const DEBOUNCE_DELAY = 700;
const NO_PAGE_ITEMS = 10;

export const People: React.FC<{}> = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [delayedSearchTerm, setDelayedSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const { loading, error, data, refetch } = useQuery(GET_PEOPLE_DATA, {
    variables: {
      page,
      search: delayedSearchTerm,
    },
  });

  const pageCount = useMemo(
    () => Math.ceil(data?.peopleData?.count / NO_PAGE_ITEMS),
    [data?.peopleData?.count]
  );

  const [activeSnackbar, setActiveSnackbar] = useState(false);

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    handleDebounce(value);
  };

  const handleDebounce = debounce(
    (searchQuery: string) => setDelayedSearchTerm(searchQuery),
    DEBOUNCE_DELAY
  );

  useEffect(() => {
    if (error) setActiveSnackbar(true);
  }, [error]);

  const onClickPerson = (name: string) => () => history.push(`/person/${name}`);

  const onCloseSnackbar = () => {
    setActiveSnackbar(false);
    onClickRefreshPageButton();
  };

  const onClickRefreshPageButton = () => {
    refetch({ page: 1, search: '' });
    handleInputChange('');
  };

  const onClickGoToHome = () => history.push('/');

  return (
    <PageLayout>
      <Header>
        <InnerHeaderWrapper>
          <LogoWrapper onClick={onClickGoToHome}>
            <img src={starwarslogo} alt="" />
            <LogoText>starwars</LogoText>
          </LogoWrapper>
          <SearchbarWrapper>
            <Input
              onChange={handleInputChange}
              placeholder="Type name to search…"
              value={searchTerm}
            />
          </SearchbarWrapper>
        </InnerHeaderWrapper>
      </Header>
      <SectionWrapper>
        <InnerSectionWrapper>
          {loading || error ? (
            <Spinner size="large" page={true} />
          ) : data?.peopleData?.people?.length > 0 ? (
            <PeopleWrapper>
              {data.peopleData.people.map((person: Person, index: number) => (
                <PersonCard
                  key={index}
                  name={person.name}
                  height={person.height}
                  mass={person.mass}
                  homeworld={person.homeworld}
                  gender={person.gender}
                  onClick={onClickPerson(person.name)}
                />
              ))}
            </PeopleWrapper>
          ) : data?.peopleData.errorMessage ? (
            <NotFound
              iconName="search"
              message={data.peopleData.errorMessage}
              handleClick={onClickRefreshPageButton}
              buttonLabel="Go back"
            />
          ) : (
            <span />
          )}
          {pageCount > 1 && (
            <PaginationWrapper>
              <Pagination
                pageCount={pageCount}
                currentPage={page}
                onPageChange={setPage}
                rangeToDisplay={3}
              />
            </PaginationWrapper>
          )}
          <Snackbar actionLabel="Home" onClick={onCloseSnackbar} active={activeSnackbar}>
            Error encountered in setting up processes.
          </Snackbar>
        </InnerSectionWrapper>
      </SectionWrapper>
    </PageLayout>
  );
};

export default People;
