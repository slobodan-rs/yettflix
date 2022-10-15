import Loading from "./helpers/Loading";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/img/logo-loader.svg";

export function Loader() {
  return (
    <FullPageOverlay>
      <Loading
        startAt="bottom"
        styles={{ flood: "#B4FF00", fill: "white" }}
        width="40px"
        height="40px"
      >
        <Logo />
      </Loading>
    </FullPageOverlay>
  );
}

const FullPageOverlay = styled.div`
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
