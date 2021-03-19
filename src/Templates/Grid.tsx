import React from 'react';
import styled from 'styled-components';
import { StyleConstants } from '../System/Constants/Style';

const Grid:React.FC = ({children}) => {
    return (
        <GridDiv>
            {React.Children.map(children, el => <GridItemDiv>{el}</GridItemDiv>)}
        </GridDiv>
    );
}

const GridDiv = styled.div`
display: flex;
align-items: center;
align-content: start;
justify-content: center;
flex-wrap: wrap;
height: 100%;
`;

const GridItemDiv = styled.div`
width: 2in;
height: 2in;
margin: .25in;
display: flex;
flex-shrink: 0;

background-color: ${StyleConstants.colours.dark.uiLight};
border: 8px solid ${StyleConstants.colours.dark.uiMedium};
border-radius: ${StyleConstants.dimensions.corners.default.value}${StyleConstants.dimensions.corners.default.unit};

transition: all 160ms ease-out;

> a {
    color: ${StyleConstants.colours.dark.uiDark};
    text-decoration: none;
    font-size: 24px;
    text-align: center;
}

&:hover {
    border-color: ${StyleConstants.colours.dark.uiLight};
    transform: scale(1.125);
}
`;

export default Grid;