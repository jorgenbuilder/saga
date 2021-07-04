import { Redirect } from 'react-router-dom';
import Routes from 'src/constant/routes';
const Index:React.FC = () => {
    return (
        <Redirect push={true} to={Routes.workbench.path} />
    );
};

export default Index;
