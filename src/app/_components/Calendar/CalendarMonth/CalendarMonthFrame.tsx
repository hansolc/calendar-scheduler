import React from "react";
import styled, { css } from "styled-components";

const tableStyle = css`
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  ${tableStyle}
`;

const TableBodyContainer = styled.div`
  width: 100%;
  position: relative;
`;

const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return <Table className="table-header">{children}</Table>;
};

const TableBody = ({ children }: { children: React.ReactNode }) => {
  return <TableBodyContainer>{children}</TableBodyContainer>;
};

const TableBodyItem = ({ style }: { style: React.CSSProperties }) => {
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

const CalendarMonthFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TableHeader>
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
      </TableHeader>
      <TableBody>
        {[0, 1, 2, 3, 4, 5].map((rowHeight, idx) => {
          return (
            <TableBodyItem
              style={{ top: `${rowHeight * 108}px` }}
              key={idx}
            ></TableBodyItem>
          );
        })}
      </TableBody>
      {children}
    </>
  );
};

export default CalendarMonthFrame;
