import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Routes from '../../System/Constants/Routes'
import Grid from '../../Templates/Grid'

const Workbench:React.FC = () => {
    return (
        <Grid>
            <BlockLink to={Routes.workbenchStaticRotation.path}>
                Static Rotation
            </BlockLink>
            <BlockLink to={Routes.workbenchCardReveal.path}>
                Card Reveal
            </BlockLink>
            <BlockLink to={Routes.workbenchShuffleDeck.path}>
                Shuffle Deck
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