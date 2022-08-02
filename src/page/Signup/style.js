import styled from "styled-components";

export const Header = styled.header`
    text-align: left;
    font-size: 2rem;
    font-weight: 600;
    line-height: 5rem;
    border-bottom: 1px solid #dadce0;
    margin-bottom: 3rem;
`;

export const Form = styled.form`
    margin: 0 auto;
    width: 40rem;
    max-width: 40rem;
    & > button {
        width: 100%;
    }
`;

export const Input = styled.input`
    border-radius: 4px;
    font-size: 1.5rem;
    border: 1px solid ${(props) => (props.error ? `#f77` : `#dbdbdb`)};
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    margin: 0 0 2rem;
    width: 100%;
    color: 
    background-color: 
    padding: 1.2rem;
    height: 4.2rem;
    padding: 1.3rem;
    &:focus {
        box-shadow: 0 0 0 5px ${(props) =>
            props.error
                ? `rgba(255, 199, 199, 0.5)`
                : `rgba(130, 224, 250, 0.5)`};
    }
`;
