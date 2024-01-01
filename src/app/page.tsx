"use client";

import React from "react";
import styled from "styled-components";
import Calendar from "./_components/Calendar";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const TableBodyContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  &.table-header {
    position: relative;
    text-align: left;
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #f1f1f1;
    background: #f8f8f8;
  }

  &.table-body {
    position: absolute;
    height: 108px;
    left: 0;
    bottom: 0;
    right: 0;
    tbody > tr > td {
      border-bottom: 1px solid #f4f4f4;
      border-right: 1px solid #f4f4f4;
    }
  }
`;

const TableHeader = () => {
  return (
    <Table className="table-header">
      <tbody>
        <tr>
          <th>일</th>
          <th>월</th>
          <th>화</th>
          <th>수</th>
          <th>목</th>
          <th>금</th>
          <th>토</th>
        </tr>
      </tbody>
    </Table>
  );
};

const TableBody = ({ style }: { style: React.CSSProperties }) => {
  return (
    <Table className="table-body" style={style}>
      <tbody>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default function Home() {
  return (
    <Container>
      <Calendar />
    </Container>
  );
}
