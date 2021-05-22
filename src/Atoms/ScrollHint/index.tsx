import styled from 'styled-components';

const ScrollHint:React.FC = () => {

    return (
        <>
            <Element />
        </>
    );
}

const Element = styled.div`
position: absolute;
z-index: 100;
bottom: 10vh;
left: 50%;

width: 62px;
height: 62px;
margin-left: -31px;

background: black;
border-radius: 50%;
`;

export default ScrollHint;
