import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getShow } from "../services";
import { Loader } from "./Loader";
import {
  Article,
  ArticleTitle,
  Section,
  ShowDiv,
} from "./styledcomponents/StyledLandingPage";
import {
  Banner,
  Button,
  GenresDiv,
  GenresWrapper,
  StyledMaterialIcon,
} from "./styledcomponents/StyledShowPage";
import StarsRating from "stars-rating";
import { isMobile } from "react-device-detect";

const Show = ({ selectedShow }) => {
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState([]);
  const [banner, setBanner] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Setting tab title
  useEffect(() => {
    document.title = "Yettflix | " + show.name;
  }, [show]);

  useEffect(() => {
    setLoader(true);
    async function getCurrentShow() {
      const { loading, errors, data } = await getShow(
        location.pathname.replace("/show/", "")
      );

      if (loading) return <h3>Loading ...</h3>;
      if (errors) return <h1>`Error: ${errors}`</h1>;

      //setTimeout(data.getTimeout);
      if (data) {
        setShow(data);
        setBanner(data.image.original);
        setLoader(false);
      }
    }

    // If page is reloaded the call to API is made, otherwise the state data is used to minimize calls to API and optimize code
    selectedShow.lenght === 0 ? setShow(selectedShow) : getCurrentShow();
  }, [location.pathname, selectedShow]);

  const handleBack = () => {
    navigate(`/`);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        show && (
          <>
            <Banner banner={banner} />
            <Section>
              <Article>
                <ArticleTitle showPage>{show.name}</ArticleTitle>
                <GenresWrapper stars>
                  <StarsRating
                    count={10}
                    size={isMobile ? 18 : 34}
                    value={show.rating && show.rating.average}
                    color2={"#ffd700"}
                    edit={false}
                  />
                  <div>{show.rating && show.rating.average + " (Average)"}</div>
                </GenresWrapper>
                <GenresWrapper>
                  {show.genres &&
                    show.genres.map((el) => {
                      return <GenresDiv key={el}>{el}</GenresDiv>;
                    })}
                </GenresWrapper>
              </Article>
              <Article>
                <ShowDiv
                  dangerouslySetInnerHTML={{ __html: show && show.summary }}
                ></ShowDiv>
              </Article>
              <Article>
                <StyledMaterialIcon time>
                  {show && show.runtime + " min"}
                </StyledMaterialIcon>
              </Article>
              {show.schedule &&
                show.schedule.days.map((el) => (
                  <Article key={el}>
                    <StyledMaterialIcon schedule>
                      {"Schedule: " + show.schedule.time + "h " + el}
                    </StyledMaterialIcon>
                  </Article>
                ))}
              <Article>
                <StyledMaterialIcon premier>
                  {show && "Premiered: " + show.premiered}
                </StyledMaterialIcon>
              </Article>
              <Article>
                <StyledMaterialIcon>
                  {show && "Ended: " + show.ended}
                </StyledMaterialIcon>
              </Article>
              <Article>
                <Button onClick={handleBack}>Back</Button>
              </Article>
            </Section>
          </>
        )
      )}
    </>
  );
};

export default Show;
