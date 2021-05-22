import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Routes from '../../System/Constants/Routes'
import Grid from '../../Templates/Grid'

const Workbench:React.FC = () => {
    return (
        <Grid>
            <BlockLink to={Routes.workbenchStaticRotation.path}>
                Static Rotation (CSS)
            </BlockLink>
            <BlockLink to={Routes.workbenchCardReveal.path}>
                Draw (CSS)
            </BlockLink>
            <BlockLink to={Routes.workbenchShuffleDeck.path}>
                Shuffle Deck (CSS)
            </BlockLink>
            <BlockLink to={Routes.workbenchSvgCard.path}>
                ThreeJS
            </BlockLink>
            <BlockLink to={Routes.workbenchDraw.path}>
                Draw (Threejs)
            </BlockLink>
            <BlockLink to={Routes.workbenchThreeOnClick.path}>
                Three On Click
            </BlockLink>
            <BlockLink to={Routes.workbenchTilt.path}>
                Tilt
            </BlockLink>
            <BlockLink to={Routes.app.path}>
                App
            </BlockLink>
            <BlockLink to={Routes.workbenchSplash.path}>
                Splash
            </BlockLink>
        </Grid>
    );
}

export default Workbench

const BlockLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;