import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Routes from 'constant/routes';
import SplashScreen from './splash';

const AppScreen:React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 4000);
    });

    if (loaded) return <Redirect to={Routes.drawSelection.path} />;
    return <SplashScreen />;
}

export default AppScreen;