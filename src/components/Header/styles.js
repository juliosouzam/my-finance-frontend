import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  background: #141a15;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
  }

  nav {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      li {
        font-size: 14px;

        a {
          margin-left: 20px;
        }
      }
    }

    button {
      background: transparent;
      border: 0;
      font-weight: bold;
      color: #fff;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    button {
      background: transparent;
      border: 0;

      font-weight: bold;
      color: #fff;
    }
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
