import styled from 'styled-components';
import container from '../../tools/container';
import TagAnime from '../TagAnime';
import TitleAnime from '../TitleAnime';

export const Text = styled.div`
  max-width: 45%;
  padding-top: 10rem;

  ${TagAnime} {
    margin-bottom: 40rem;
  }

  ${TitleAnime} {
    margin-bottom: 20rem;
  }
`;

export const BannerAnime = styled.section`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70vh;
  height: 100vh;
`;
