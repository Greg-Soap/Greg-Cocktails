import React from "react";
import { Bars } from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const Loader = () => {
  return (
    <React.Fragment>
      <Container>
        <Bars color="green" height={200} width={200} />
      </Container>
    </React.Fragment>
  );
};

export default Loader;
