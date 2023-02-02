import styled from 'styled-components';
import container from '../../styles/tools/container';
import DescriptionAnime from '../DescriptionAnime';
import TagAnime from '../TagAnime';

const SectionAnime = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20rem;
  padding-bottom: 20rem;
  ${container};

  & > ${TagAnime} {
    margin-bottom: 20rem;
  }

  & > ${TagAnime}:not(:first-child) {
    align-self: flex-start;
  }

  & > ${DescriptionAnime} {
    max-width: 700px;
    margin: 0 auto 40rem;
  }
`;

export default SectionAnime;
