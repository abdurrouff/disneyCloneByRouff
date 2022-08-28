import React, { useEffect } from 'react';
import { auth, provider } from '../firebase';
import styled from 'styled-components';
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            user: user.photoURL,
          })
        );
        navigate('/');
      }
    });
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          user: user.photoURL,
        })
      );
      navigate('/');
    });
  };

  const signOutt = () => {
    signOut(auth).then(() => {
      dispatch(setSignOut());
      navigate('/login');
    });
  };
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      {!userName ? (
        <Login onClick={signIn}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src='/images/home-icon.svg' alt='' />
              <span>HOME</span>
            </a>
            <a>
              <img src='/images/search-icon.svg' alt='' />
              <span>SEARCH</span>
            </a>
            <a>
              <img src='/images/watchlist-icon.svg' alt='' />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src='/images/original-icon.svg' alt='' />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src='/images/movie-icon.svg' alt='' />
              <span>MOVIES</span>
            </a>
            <a>
              <img src='/images/series-icon.svg' alt='' />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg onClick={signOutt} src='/images/rouff.jpeg' />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &::after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
    @media (max-width: 480px) {
      display: none;
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
