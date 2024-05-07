import styled from "styled-components/native";

const PageContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FABACA;
`;

const PageTitle = styled.Text`
  padding-top: 80px;
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

const PageSubTitle = styled.Text`
  padding: 30px;
  font-size: 69px;
  font-weight: bold;
  color: rosybrown;
`;

export default function App() {
  return (
    <PageContainer>
        <PageTitle>Hellou World</PageTitle>
        <PageSubTitle>Test</PageSubTitle>
    </PageContainer>
  );
}