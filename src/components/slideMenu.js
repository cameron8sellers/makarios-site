import React from "react";
import { css } from "@emotion/css";

const easeSlow = css`
 transition: all 450ms ease-in-out;
`;

const menuBtn = css`
 position: absolute;
 z-index: 3;
 right: 20px;
 top: 20px;
 cursor: pointer;
 ${easeSlow};
 &.closer {
  transform: rotate(180deg);
 }
`;

const btnLine = css`
 width: 28px;
 height: 4px;
 margin: 0 0 5px 0;
 background-color: rgb(38, 144, 171);
 ${easeSlow};
 &.closer {
  background-color: rgb(38, 144, 171);
  &:nth-child(1) {
   transform: rotate(45deg) translate(4px, 0px);
   width: 20px;
  }
  &:nth-child(2) {
   transform: translateX(-8px);
  }
  &:nth-child(3) {
   transform: rotate(-45deg) translate(4px, 0px);
   width: 20px;
  }
 }
`;

const menuOverlay = css`
 z-index: 2;
 position: fixed;
 top: 0;
 right: 0;
 opacity: 1;
 background-color: rgb(109, 171, 21);
 height: 80vh;
 width: 40vw;
 transform: translateX(100%);
 transition: all 500ms ease-in-out;
 &.show {
  background-color: white;
  transform: translateX(0%);
 }
 nav {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
   height: 30px;
   text-decoration: none;
   color: rgb(38, 144, 171);
   opacity: 1;
   cursor: pointer;
   transition: all 150ms ease-in-out;
   &:hover {
    color: #f28eba;
   }
  }
 }
 @media (max-width: 800px) {
  width: 100vw;
 }
`;

class Menu extends React.Component {
 state = {
  isMenuOpen: false,
 };

 toggleMenu = () =>
  this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));

 render() {
  const { isMenuOpen } = this.state;
  return (
   <React.Fragment>
    <div
     className={`${menuBtn} ${isMenuOpen ? "closer" : null}`}
     onClick={this.toggleMenu}
    >
     <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
     <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
     <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
    </div>
    <div className={`${menuOverlay} ${isMenuOpen ? "show" : null}`}>
     <nav>
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/photos">Photos</a>
      <a href="/locations">Locations</a>
      <a href="/contact">Contact Us</a>
     </nav>
    </div>
   </React.Fragment>
  );
 }
}

export default Menu;
