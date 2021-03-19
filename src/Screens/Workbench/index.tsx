import { Link } from 'react-router-dom'
import Routes from '../../System/Constants/Routes'
import Grid from '../../Templates/Grid'

const Workbench:React.FC = () => {
    return (
        <Grid>
            <Link to={Routes.workbenchStaticRotation.path}>
                Static Rotation
            </Link>
            <Link to={Routes.workbenchCardReveal.path}>
                Card Reveal
            </Link>
        </Grid>
    );
}

export default Workbench