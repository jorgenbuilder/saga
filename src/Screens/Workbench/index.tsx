import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components';
import Routes from 'src/constant/routes'
import Grid from 'src/components/grid'

const Workbench:React.FC = () => {
    // if (process.env.NODE_ENV === 'production') {
    //     return <Redirect to={Routes.app.path} />
    // }
    return (
        <Grid>
            <BlockLink to={Routes.app.path}>
                App
            </BlockLink>
            <BlockLink to={Routes.workbenchDraw.path}>
                Draw
            </BlockLink>
            <BlockLink to={Routes.auth.path}>
                Auth
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