import * as S from "./style";

function CreativeCard(props) {
  return (
    <S.CardContainer>
      <S.CardTitle>{props.title}</S.CardTitle>
      <S.CardSubTitle>{props.description}</S.CardSubTitle>
    </S.CardContainer>
  );
}

export const  CreativeComponent () {
  return (
    <S.Container>
      <CreativeCard title='oi' description='teste' />;
      <CreativeCard title='oi' description='teste' />;
      <CreativeCard title='oi' description='teste' />;
      <CreativeCard title='oi' description='teste' />;
    </S.Container>
  );
}
