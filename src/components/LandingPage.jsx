import React, { useEffect, useMemo, useState } from "react";
import {
  ArticleTitle,
  Article,
  Main,
  Section,
  ShowDiv,
  Title,
} from "./styledcomponents/StyledLandingPage";
import { getAllShows } from "../services";
import "react-multi-carousel/lib/styles.css";
import { deviceType, isMobile } from "react-device-detect";
import Carousel from "react-multi-carousel";
import { Loader } from "./Loader";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ setSelectedShow }) => {
  const [shows, setShows] = useState([]);
  const [favoriteShows, setFavoriteShows] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  // Setting tab title
  useEffect(() => {
    document.title = "Yettflix";
  }, []);

  // Getting all shows
  useMemo(() => {
    setLoader(true);
    getAllShows().then((res) => {
      setShows(res.data);
      setLoader(false);
    });
  }, []);

  // Filtering Yettflix favorites
  useEffect(() => {
    let favorites = [];
    shows &&
      shows.map((show) => {
        if (show.id === 1 || show.id === 2 || show.id === 3)
          favorites.push(show);
      });
    setFavoriteShows(favorites);
  }, [shows]);

  const handleRedirect = (show) => {
    // Setting the selected show to use upon redirect
    setSelectedShow(show);
    navigate(`/show/${show.id}`);
  };

  // Set carousel item count
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <Main>
      {loader && <Loader />}
      <Section bg>
        <Title>
          Yes it's
          <br /> Show Time!
        </Title>
        {/* -------pun intended----------- */}
      </Section>

      <Section>
        <Article>
          <ArticleTitle>Popular on Yettflix</ArticleTitle>
          <Carousel
            responsive={responsive}
            swipeable={isMobile}
            draggable={false}
            showDots={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 0.5s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType={deviceType}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {favoriteShows &&
              favoriteShows.map((show) => {
                return (
                  <ShowDiv favorites key={show.id}>
                    <div onClick={() => handleRedirect(show)}>
                      <img src={show.image.medium} alt="" />
                    </div>
                  </ShowDiv>
                );
              })}
          </Carousel>
        </Article>
        <Article>
          <ArticleTitle>Trending Now</ArticleTitle>
          <Carousel
            responsive={responsive}
            swipeable={isMobile}
            draggable={false}
            showDots={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 0.5s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType={deviceType}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {shows &&
              shows.map((show) => {
                return (
                  <ShowDiv key={show.id}>
                    <div onClick={() => handleRedirect(show)}>
                      <img src={show.image.medium} alt="" />
                    </div>
                  </ShowDiv>
                );
              })}
          </Carousel>
        </Article>
      </Section>
    </Main>
  );
};

export default LandingPage;
