import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const Banner = styled.div`
  background: ${({ banner }) =>
    banner && `url(${banner}) 10% 0px / cover no-repeat`};
  opacity: 0.1;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  z-index: -1;
  filter: opacity(0.5);
`;

export const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${isMobile && "0 1.5rem"};
  margin-bottom: ${({ stars }) => (stars ? "3rem" : isMobile && "0.5rem")};

  & > :last-child {
    color: ${({ stars }) => stars && "#fff"};
    align-self: ${({ stars }) => stars && "center"};
    padding-left: ${({ stars }) => stars && "2rem"};
    font-size: ${({ stars }) => stars && "1.2rem"};
  }
`;

export const GenresDiv = styled.div`
  background-color: #b4ff00;
  border-radius: 2rem;
  padding: 0.8rem;
  color: #212121;
  display: flex;
  margin-right: 0.5rem;
`;

export const StyledMaterialIcon = styled.div`
  font-size: ${isMobile ? "1rem" : "1.2rem"};
  color: #fff;
  display: flex;
  vertical-align: bottom;
  padding: ${({ search }) =>
    search ? "" : isMobile ? "0.5rem 1.5rem" : "1rem 0"};
  align-items: center;

  ${(props) => {
    if (props.time) {
      return `
      &:before {
        font-size: 2rem;
        margin-right: 2rem;
        font-family: 'Material Icons';
        content: 'schedule';
        vertical-align: bottom;
      }
      `;
    } else if (props.schedule) {
      return `
      &:before {
        font-size: 2rem;
        margin-right: 2rem;
        font-family: 'Material Icons';
        content: 'send';
        vertical-align: bottom;
      }
      `;
    } else if (props.premier) {
      return `
      &:before {
        font-size: 2rem;
        margin-right: 2rem;
        font-family: 'Material Icons';
        content: 'event';
        vertical-align: bottom;
      }
      `;
    } else if (props.search) {
      return `
      &:before {
        font-size: 2rem;
        font-family: 'Material Icons';
        content: 'search';
        vertical-align: bottom;
        color: #b4ff00;
      }
      `;
    } else {
      return `
      &:before {
        font-size: 2rem;
        margin-right: 2rem;
        font-family: 'Material Icons';
        content: 'calendar_today';
        vertical-align: bottom;
      }
      `;
    }
  }}
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border: 2px solid #fff;
  background-color: transparent;
  border-radius: 0.5rem;
  color: #fff;
  font-size: ${isMobile ? "1rem" : "1.2rem"};
  margin: ${isMobile ? "1.5rem" : "2rem 0 0 0"};
  cursor: pointer;

  :hover {
    border-color: #fff3;
  }
`;
