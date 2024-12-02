import React from "react";
import sprite from "../../images/sprite.svg";
import {
  Wrapper,
  MenuBody,
  MenuCloseBtn,
  MenuIcon,
  LogoutBtn,
} from "./SideBar.styled";

const SideBar = () => {
  return (
    <Wrapper>
      <MenuBody>
        <MenuCloseBtn type="button">X</MenuCloseBtn>

        <ul>
          <MenuIcon>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#dashboard`}></use>
            </svg>
          </MenuIcon>
          <MenuIcon>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#shopping_cart`}></use>
            </svg>
          </MenuIcon>
          <MenuIcon>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#pharmacy`}></use>
            </svg>
          </MenuIcon>
          <MenuIcon>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#users`}></use>
            </svg>
          </MenuIcon>
          <MenuIcon>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#flask`}></use>
            </svg>
          </MenuIcon>
        </ul>

        <div>
          <LogoutBtn type="button">
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#majesticons_logout`}></use>
            </svg>
          </LogoutBtn>
        </div>
      </MenuBody>
    </Wrapper>
  );
};

export default SideBar;
