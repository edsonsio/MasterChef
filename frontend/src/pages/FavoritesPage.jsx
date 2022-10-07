import React from 'react';
import styled from 'styled-components';

// own components
import ProfileLeftBar from '../components/ProfileLeftBar';
import backgroundImage from '../image/2.jpg';
import ShowFavorites from '../components/ShowFavorites';

// MUI components
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function FavoritesPage() {
  // const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');
  // const userId = localStorage.getItem('user_id');

  return (
    <Wrapper>
      <BarContainer>
        <ProfileLeftBar email={email} />
      </BarContainer>
      <DetailContainer>
        <InfoPart>
          <Container>
            <Blank />
            <Info>
              <ProfileImage>
                <FavoriteBorderIcon sx={{ width: '100%', height: '110%' }} />
              </ProfileImage>
            </Info>
          </Container>
        </InfoPart>
        <EditPart>
          <h1 style={{ marginLeft: '2%', color: 'green' }}>Favorite Recipes:</h1>
          <ShowFavorites />
        </EditPart>
      </DetailContainer>
    </Wrapper>
  )
}

export default FavoritesPage;

const Wrapper = styled.div`
  background-size: 100% 100%;
  height: 100vh;
`;

const BarContainer = styled.div`
  position: fixed;
	left: 0;
	height: 100%;
	width: 20vw;
`;

const DetailContainer = styled.div`
  position: fixed;
	right: 0;
	height: 100%;
	width: calc(100% - 20vw);
	border-radius: 20px 20px 0 0;
`;

const InfoPart = styled.div`
  background-image: url(${backgroundImage});
	background-size: 100% 100%;
	height: 30vh;
	border-radius: 20px 20px 0 0;
`;

const EditPart = styled.div`
	height: calc(100% - 30vh);
	border-radius: 0 0 20px 20px;
`;

const Container = styled.div`
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
`;

const Blank = styled.div`
  height: 20px;
`;

const Info = styled.div`
  display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
	gap: 80px;
`;

const ProfileImage = styled.div`
  width: 250px;
  height: 250px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
	border-radius: 50%;
	display: flex;
`;
