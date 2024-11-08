import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background: hsl(240 10% 95%);

  display: grid;
  grid-template-rows: [header] auto [main] 1fr;
`;

export const AppHeader = styled.header`
  padding: 16px;

  color: hsl(0 0% 100%);
  background: rgb(23, 27, 38);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AppBody = styled.main`
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 8px;
`;

export const AppContent = styled.div`
  padding: 8px 16px;
  overflow: scroll;
  display: grid;
`;
