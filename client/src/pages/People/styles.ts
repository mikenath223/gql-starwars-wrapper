import styled from 'styled-components';

export const Container = styled.div`
  background: #f9fafb;
  height: 100vh;
`;

export const Header = styled.div`
  padding: 24px 0 24px;
  width: 100%;
  height: auto;
  position: sticky;
  top: 0;
  z-index: sticky;
  background: #f9fafb; ;
`;

export const InnerHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1441px) {
    padding: 0 8%;
    margin: 0 14%;
  }

  @media screen and (max-width: 1440px) {
    padding: 0 5%;
    margin: 0 10%;
  }

  @media screen and (max-width: 960px) {
    padding: 0 3.5%;
    margin: 0 5%;
  }

  @media screen and (max-width: 480px) {
    padding: 0 4%;
    margin: 0 1%;
  }
`;

export const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1441px) {
    width: 49%;
  }

  @media screen and (max-width: 1440px) {
    width: 49%;
  }

  @media screen and (max-width: 960px) {
    width: 49%;
  }

  @media screen and (max-width: 480px) {
    width: 69%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: violet;
  font-size: 24px;
  cursor: pointer;
  img {
    width: 50px;
  }

  @media screen and (min-width: 1441px) {
    width: 49%;
  }

  @media screen and (max-width: 1440px) {
    width: 49%;
  }

  @media screen and (max-width: 960px) {
    width: 50%;
  }

  @media screen and (max-width: 480px) {
    width: 30%;
  }
`;

export const LogoText = styled.h3`
  margin: 0;
  display: flex;
  margin-left: 4px;
  font-weight: 500;
  align-items: center;
`;

export const StarIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionWrapper = styled.section`
  width: 100%;
`;

export const InnerSectionWrapper = styled.section`
  margin: auto;
  width: 95vw;
`;

export const PeopleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding-bottom: 40px;
`;
