import { AiOutlineMenu } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SideDrawer from './SideDrawer';
import GlobalFonts from '../../fonts/fonts';
import Login from '../../pages/Login/Login';

const Nav = () => {
  const [navDrawer, setNavDrawer] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [navBar, SetNavBar] = useState(false);

  const startLogin = () => {
    setLoginModal(true);
  };

  const quitLogin = () => {
    setLoginModal(false);
  };
  const location = useLocation();

  const handleNavDrawer = () => {
    setNavDrawer(prev => !prev);
  };

  const changeNavStyle = () => {
    if (window.scrollY >= 80) {
      SetNavBar(false);
    } else {
      SetNavBar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavStyle);
    return () => window.removeEventListener('scroll', changeNavStyle);
  }, [navBar]);

  return (
    <>
      <GlobalFonts />
      <SideDrawer navDrawer={navDrawer} closeDrawer={handleNavDrawer} />
      <Navigator pathName={location.pathname}>
      <Navigator changeNavBar={navBar}>
        <NavWrapper>
          <NavElement>
            <NavBtn>
              <AiOutlineMenu onClick={handleNavDrawer} size={25} />
            </NavBtn>
            <NavBtn>
              <img src="/images/branchTime.png" alt="logo" />
            </NavBtn>
          </NavElement>
          <NavElement>
            <NavBtn>
              <NavLogin onClick={startLogin}>시작하기</NavLogin>
              <CgSearch size={25} />
            </NavBtn>
          </NavElement>
        </NavWrapper>
      </Navigator>
      {loginModal && <Login quitLogin={quitLogin} />}
    </>
  );
};

export default Nav;

const Navigator = styled.div`
  position: relative;
  position: sticky;
  width: 100vw;

  ${({ pathName }) =>
    pathName === '/post_list' &&
    css`
      border-bottom: none;
  top: 0;
  background-color: white;
  z-index: 1000;

  ${props =>
    !props.changeNavBar &&
    css`
      background-color: rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid #eee;
    `}
`};

const NavWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'space-between')}
  height: 4rem;
  margin: 0 1rem 0 1rem;
  padding-top: 0.2rem;
`;

const NavElement = styled.span`
  ${({ theme }) => theme.flex.flexBox}
`;

const NavBtn = styled.button`
  ${({ theme }) => theme.flex.flexBox}
  background: transparent;
  border: 0;
  cursor: pointer;
  margin: 0.2rem;

  img {
    width: 5.2rem;
    margin-left: 0.2rem;
  }
`;

const NavLogin = styled.span`
  ${({ theme }) => theme.flex.flexBox}
  height: 1rem;
  margin: 1rem;
  padding: 0.8rem 0.7rem;
  border-radius: 10rem;
  border: 1px solid #999;
  color: #999;
  font-size: 12px;
  background-color: ${theme => theme.theme.colors.white};
`;
