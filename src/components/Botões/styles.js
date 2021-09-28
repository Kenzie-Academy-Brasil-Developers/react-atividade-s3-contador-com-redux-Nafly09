import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-around;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  && {
    background-color: var(--green);
    width: 50px;
    height: 50px;
    font-size: larger;

    &:hover {
      background-color: var(--green);
    }
  }
`;
