import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  height: auto;
  padding: 12px;
  cursor: pointer;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  border: 1px solid #d3d6d9;
  box-sizing: border-box;
  text-align: left;
  padding: 16px;
  background: white;
  box-shadow: 0px 4px 16px #d3d6d9;
  align-items: center;

  &:hover {
    border-color: #b3b7bc;
    box-shadow: 0px 4px 16px #b3b7bc;
    background-color: aliceblue;
  }
`;

export const Head = styled.h5`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin: 0 0 8px;
  color: violet;
`;

export const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const DetailsText = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #72777d;
  margin: 0;
`;

export const DetailsLink = styled(DetailsText)`
  color: #2097f9;
  cursor: pointer;
`;

export const DetailsWrapper = styled.div`
  flex: 1 1 auto;
`;

export const ChevronRightWrapper = styled.div`
  flex: 0 1 auto;
  color: #72777d;

  &:hover {
    color: #4a4e55;
  }
`;

export const DotDivider = styled.span`
  content: '';
  width: 3px;
  height: 3px;
  margin: 0 8px;
  border-radius: 50%;
  background: #b3b7bc;
  display: inline-block;
  vertical-align: middle;
`;

export const AvataWrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
`;

export const Content = styled.div`
  padding: 24px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1 0;
`;
