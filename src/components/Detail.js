import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
      <Background>
        <img src='/images/rouff.jpeg' />
      </Background>
      <ImgTitle>
        <img
          src='https://imgs.search.brave.com/BuaKICKPVPzYMlhX7TdWqEjnnKwJNNzspdxKed_ht1k/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/M0h3cmp5TTVvNXVi/azRGVGlYdktBSGFI/YSZwaWQ9QXBp'
          alt=''
        />
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
      <SubTitle>2018 . 7s . Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi
        eaque, iure facere accusantium commodi minima enim eos iusto
        consequuntur!
      </Description>
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
