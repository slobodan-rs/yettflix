import React, { useEffect, useState } from "react";
import {
  Input,
  SearchResultContent,
  SearchResultWrapper,
  SearchWrapper,
  StyledHref,
  StyledLogo,
  StyledNav,
} from "./styledcomponents/StyledHeader";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useScrollPosition } from "./helpers/useScrollPosition";
import { StyledMaterialIcon } from "./styledcomponents/StyledShowPage";
import { getShowSearch } from "../services";

const Header = ({ setSelectedShow }) => {
  const navigate = useNavigate();
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [query, setQuery] = useState("");
  const [serchedData, setSerchedData] = useState([]);
  const [focus, setFocus] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Search
  useEffect(() => {
    // Search call triger set for minimum 3 caracters
    if (query.length > 3) {
      async function getSearchedShow() {
        const { loading, errors, data } = await getShowSearch(query);

        if (loading) return <h3>Loading ...</h3>;
        if (errors) return <h1>`Error: ${errors}`</h1>;

        //setTimeout(data.getTimeout);
        if (data) {
          setSerchedData(data);
        }
      }
      getSearchedShow();
    } else {
      setSerchedData([]);
    }
  }, [query]);

  // Custom hook for geting current scroll position
  useScrollPosition(
    ({ currPos }) => {
      let isShow;
      isShow = Math.abs(currPos.y) < 50;
      // console.log(currPos.y);
      if (isShow !== hideOnScroll) {
        if (currPos.y === 0) {
          setHideOnScroll(isShow);
        } else {
          setHideOnScroll(isShow);
        }
      }
    },
    [hideOnScroll]
  );

  // Handle clik on logo to Index page or Scroll to top if user is on index allready
  const handleClick = () => {
    if (window.location.pathname === "/") {
      scrollToTop();
    } else {
      navigate(`/`);
    }
  };

  // Setting the search term
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // Handle on blur
  const handleBlur = () => {
    if (!focus) {
      setFocus(false);
      setQuery("");
    }
  };

  // Handle Redirect to show
  const handleRedirect = (el) => {
    setSelectedShow(el.show);
    navigate(`/show/${el.show.id}`);
    window.location.reload(true);
  };

  return (
    <StyledNav handlescroll={!hideOnScroll}>
      <StyledLogo src={logo} onClick={() => handleClick()} />

      <SearchWrapper>
        <Input
          type="text"
          placeholder="Search!"
          onChange={handleSearch}
          value={query}
          onBlur={handleBlur}
        />
        <StyledHref href="#">
          <StyledMaterialIcon search></StyledMaterialIcon>
        </StyledHref>
        <SearchResultWrapper
          hide={!serchedData.length}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          {serchedData &&
            serchedData.map((el) => (
              <SearchResultContent
                key={el.show.id}
                onClick={() => handleRedirect(el)}
              >
                <img
                  src={el.show.image && el.show.image.medium}
                  height="50px"
                  alt=""
                />
                <p>{el.show.name}</p>
              </SearchResultContent>
            ))}
        </SearchResultWrapper>
      </SearchWrapper>
    </StyledNav>
  );
};

export default Header;
