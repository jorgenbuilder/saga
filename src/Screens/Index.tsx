import { Redirect } from 'react-router-dom';
import Routes from '../System/Constants/Routes';
const Index:React.FC = () => {
    console.log('Rendering index.')
    return (
        <Redirect push={true} to={Routes.workbench.path} />
    );
};

export default Index;
