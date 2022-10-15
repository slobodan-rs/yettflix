import { isMobile } from "react-device-detect";
import styled from "styled-components";
import banner from "../../assets/img/banner-x.jpg";

export const Main = styled.main`
  width: 100%;
`;

export const Title = styled.h1`
  display: flex;
  width: 100%;
  font-size: ${isMobile ? "2.5rem" : "5rem"};
  color: #fff;
  z-index: 100;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  /*  filter: ${({ bg }) => bg && "drop-shadow(2px 4px 6px black)"}; */
  line-height: 1.6;
  height: 100%;
  margin: 0 auto;
  /* padding-top: ${isMobile ? "35%" : "15rem"}; */
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  flex-direction: column;
  height: auto;
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  background-position: center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover;
  background-image: ${({ bg }) => bg && `url(${banner})`};
  height: ${({ bg }) => bg && "45vh"};
  filter: drop-shadow(2px 4px 6px black);
  /* opacity: ${({ bg }) => bg && "0.2"}; */
`;

export const Article = styled.article`
  width: 100%;
  height: auto;
  max-width: 1600px;
`;

export const ArticleTitle = styled.h1`
  color: #fff;
  font-size: ${({ showPage }) =>
    showPage ? (isMobile ? "2rem" : "6rem") : "2rem"};
  text-align: left;
  padding: ${({ showPage }) =>
    showPage ? (isMobile ? "3rem 1.5rem 0 1.5rem" : "") : "0 1.5rem"};
`;

export const ShowDiv = styled.div`
  height: 100%;
  text-align: center;
  margin: ${({ favorites }) => !favorites && "0 auto"};

  p {
    text-align: left;
    color: #fff;
    width: ${isMobile ? "100%" : "40%"};
    padding: ${isMobile ? "1.5rem" : "2rem 0 0 0 "};
    font-size: ${isMobile ? "1rem" : "1.2rem"};
    box-sizing: border-box;
  }

  img {
    padding: 20px;
    width: ${isMobile ? "180px" : "200px"};
    margin: 0 auto;
    border-radius: 0.5rem;
    &:hover {
      /* z-index: 1; */
      transform: scale(1.1);
      -webkit-transform: scale(1.1); /* Safari & Chrome */
      -moz-transform: scale(1.1); /* Firefox */
      -ms-transform: scale(1.1); /* Internet Explorer */
      -o-transform: scale(1.1);
      transition: transform 0.2s;
      -webkit-transition: transform 0.2s;
      -moz-transition: transform 0.2s; /* Firefox */
      -ms-transition: transform 0.2s; /* Internet Explorer */
      -o-transition: transform 0.2s;
      cursor: pointer;
    }
  }
`;
