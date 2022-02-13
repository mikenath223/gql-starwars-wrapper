import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Avatar } from '../../components/Avatar';
import { DetailsRow } from '../../components/DetailsRow';
import { DetailsPageLayout } from '../../components/DetailsPageLayout';
import { formatCamelCase } from '../../utils/formatCamelCase';
import { PageLayout } from '../../components/PageLayout';
import { DotDivider } from '../../components/PersonCard/styles';
import { AvatarWrapper, NameWrapper, Divider, HeaderTitleWrapper } from './styles';
import { InnerHeaderWrapper, Header, LogoWrapper, LogoText } from '../People/styles';
import starwarslogo from '../../resources/starwarslogo.png';

export const GET_PERSON_DETAILS_BY_NAME = gql`
  query GetPersonDetails($name: String!) {
    person(name: $name) {
      ... on AllPersonDetails {
        name
        height
        mass
        gender
        homeworld
      }
      ... on NotFoundError {
        errorMessage
      }
    }
  }
`;

export const PersonDetails: React.FC<{}> = () => {
  const history = useHistory();
  const { name } = useParams<{ name: string }>();
  const { loading, data } = useQuery(GET_PERSON_DETAILS_BY_NAME, {
    variables: {
      name,
    },
  });

  const onClickGoToHome = () => history.push('/');

  return (
    <PageLayout>
      <Header>
        <InnerHeaderWrapper>
          <LogoWrapper onClick={onClickGoToHome}>
            <img src={starwarslogo} alt="" />
            <LogoText>starwars</LogoText>
          </LogoWrapper>
        </InnerHeaderWrapper>
      </Header>
      <DetailsPageLayout
        loading={loading}
        handleBackButtonClick={onClickGoToHome}
        empty={data?.person.errorMessage !== undefined}
        errorMessage={data?.person.errorMessage}
        renderHeader={() => (
          <>
            <AvatarWrapper>
              <Avatar
                sizeInPx="56"
                initialLetter={
                  data?.person?.name ? data.person.name.substr(0, 1).toUpperCase() : 'A'
                }
              />
            </AvatarWrapper>
            <HeaderTitleWrapper>
              <NameWrapper>{data?.person.name}</NameWrapper>
              <DotDivider />
            </HeaderTitleWrapper>
          </>
        )}
      >
        <Divider />
        {data?.person &&
          !data?.person?.errorMessage &&
          Object.keys(data?.person).map((key, index) => {
            if (key === '__typename') return undefined;
            return (
              <React.Fragment key={index}>
                <DetailsRow label={formatCamelCase(key)} value={data.person[key]} />
                <Divider />
              </React.Fragment>
            );
          })}
      </DetailsPageLayout>
    </PageLayout>
  );
};

export default PersonDetails;
