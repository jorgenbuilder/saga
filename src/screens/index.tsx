import { Redirect } from 'react-router-dom';
import Routes from 'src/constants/routes';
const Index:React.FC = () => {
    return (
        <Redirect push={true} to={Routes.workbench.path} />
    );
};

export default Index;
