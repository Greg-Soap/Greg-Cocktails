import React, { useRef } from "react";
import styled from "styled-components";
import { useGlobalContext } from "./Context";

const Container = styled.div`
  display: block;
  width: 100%;
  padding: 0 25%;
  background-color: ${({ theme }) => theme.bg};
  @media screen and (max-width: 480px) {
    width: 100vw;
    padding: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  padding: 2rem 3rem;
`;
const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-style: italic;
  width: 100%;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.input};
  border: 1px solid green;
  border-radius: 10px;
`;

const SearchBar = () => {
  const { setSearch } = useGlobalContext();

  const searchValue = useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchTerm = () => {
    setSearch(searchValue.current.value);
  };
  const submitQuery = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={submitQuery}>
          <Input
            placeholder="Search Cocktail..."
            type="text"
            ref={searchValue}
            onChange={searchTerm}
          />
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
