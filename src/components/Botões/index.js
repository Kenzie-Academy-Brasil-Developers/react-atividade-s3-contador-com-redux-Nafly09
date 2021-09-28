import { StyledButton, Container } from "./styles";
import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/action";

export const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <StyledButton variant="contained" onClick={() => dispatch(addNumber(1))}>
        +
      </StyledButton>
      <StyledButton variant="contained" onClick={() => dispatch(subNumber(1))}>
        -
      </StyledButton>
    </Container>
  );
};
