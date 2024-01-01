import React from "react";
import styled from "styled-components";
import CalendarMonth from "./CalendarMonth";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div``;

const Calendar = () => {
  return (
    <Container>
      <Header>This is Header Section</Header>
      <CalendarMonth />
    </Container>
  );
};

export default Calendar;
