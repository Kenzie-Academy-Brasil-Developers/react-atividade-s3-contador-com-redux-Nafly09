import { useSelector } from "react-redux";
import { Container } from "./styles";

export const Display = () => {
  const result = useSelector((store) => store.result);

  return <Container>{result}</Container>;
};
