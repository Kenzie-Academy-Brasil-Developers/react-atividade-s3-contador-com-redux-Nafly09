import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root {
    --white: #f5f5f5;
    --black: #000000;
    --green: #b4cb39;
    --blue: #519fe2;
}

#root{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body {
    background: var(--blue);
    color: var(--black);
}

button {
    cursor: pointer;
}
`;
