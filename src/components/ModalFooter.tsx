import { ReactElement } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 16px;

  background: hsl(0 0% 95%);

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export default function ModalFooter({ buttons }: { buttons: ReactElement }) {
  return <Container>{buttons}</Container>;
}
