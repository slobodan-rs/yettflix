import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  height: 40px;
  padding: 1.5rem;
  z-index: 999;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  transition: all 0.5s ease-in-out;
  justify-content: space-between;

  ${(props) => {
    if (props.handlescroll) {
      return `
        background-color: #212121;
      `;
    }
  }}
`;

export const StyledLogo = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const SearchWrapper = styled.div`
  position: absolute;
  top: 45px;
  right: 1.5rem;
  transform: translate(-0%, -50%);
  background: #b4ff00;
  height: 40px;
  border-radius: 50px;
  padding: 5px;

  &:hover {
    input {
      width: 100px;
      padding: 0 6px;
    }
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background: none;
  width: 0;
  padding: 0;
  color: #212121;
  float: left;
  font-size: 16px;
  transition: 0.3s;
  line-height: 40px;

  &::placeholder {
    color: #212121;
  }

  &:focus,
  &:not(:placeholder-shown) {
    width: 100px;
    padding: 0 6px;
  }
`;

export const StyledHref = styled.a`
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.3s;
`;

export const SearchResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${({ hide }) => (hide ? "0" : "300px")};
  background-color: #000000ed;
  position: absolute;
  top: 70px;
  transition: width 0.5s;
  right: 0;
  border-radius: 1rem;
  border: ${({ hide }) => (hide ? "" : "3px solid #212121f0")};
  padding: 1rem 0;
  max-height: 300px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: block;
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #b4ff00;
    border-radius: 5px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #86bd02;
  }
`;

export const SearchResultContent = styled.div`
  width: 100%;
  display: flex;
  color: #fff;
  padding: 1rem;
  border-bottom: 1px solid #212121f0;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  img {
    text-align: left;
  }
  p {
    /* width: 90%; */
    margin: auto;

    padding: 0.5rem 0;
    text-align: center;
  }
`;
