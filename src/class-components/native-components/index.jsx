import * as S from "./styles";

function CreativeCard(props) {
  return (
    <S.CardContainer>
      <S.CardTitle>{props.title}</S.CardTitle>
      <S.CardSubtitle>{props.description}</S.CardSubtitle>
    </S.CardContainer>
  );
}

export default function CreativeComponent() {
  return (
    <S.Container>
      <CreativeCard title="Nathan" description="Desenvolvedor Back-End" />
      <CreativeCard title="Kelven" description="Desenvolvedor Front-End" />
      <CreativeCard title="Gabriel" description="Desenvolvedor CAM" />
    </S.Container>
  );
}
