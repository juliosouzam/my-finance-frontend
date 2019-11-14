import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  height: 100%;

  div {
    display: flex;
    align-self: flex-end;
  }

  table {
    width: 100%;
    max-width: 1000px;
    margin-bottom: 1rem;
    color: #212529;
    border-collapse: collapse;

    thead {
      border: 1px solid #dee;

      th {
        vertical-align: bottom;
        border-bottom: 2px solid #dee;
      }
    }

    th,
    td {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee;
    }
  }

  th {
    text-align: inherit;
  }
`;
