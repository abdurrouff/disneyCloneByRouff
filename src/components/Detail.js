import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function Detail() {
  const { uid } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchSingleData() {
      const docRef = doc(db, 'movies', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMovie(docSnap.data());
      } else {
      }
    }
    fetchSingleData();
  }, []);
  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <ImgTitle>
            <img src={movie.titleImg} alt='' />
          </ImgTitle>
          <Controls>
            <PlayButton>
              <img src='/images/play-icon-black.png' />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src='/images/play-icon-white.png' />
              <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupButton>
              <img src='/images/group-icon.png' />
            </GroupButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 25px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.6;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  margin-top: 60px;
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.button`
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  border: none;
  align-items: center;
  margin-top: 20px;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  span {
    font-size: 24px;
    color: white;
  }
`;

const GroupButton = styled(AddButton)`
  background: rgb(0, 0, 0);
  display: grid;
  place-content: center;
  img {
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  color: rgb(249, 249, 249);
  margin-top: 16px;
  max-width: 760px;
`;
