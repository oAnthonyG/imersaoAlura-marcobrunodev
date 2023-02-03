import styled from 'styled-components';
import DescriptionAnime from '../DescriptionAnime';
import TagAnime from '../TagAnime';

const SectionAnime = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50rem;

  & > ${TagAnime} {
    margin-bottom: 20rem;
  }

  & > ${TagAnime}:not(:first-child) {
    margin-left: 30rem;
    align-self: flex-start;
  }

  & > ${DescriptionAnime} {
    max-width: 700px;
    margin: 0 auto 40rem;
  }
`;

export default SectionAnime;
