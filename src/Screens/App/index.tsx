import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Routes from '../../System/Constants/Routes';
import SplashScreen from './Splash';

const AppScreen:React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 4000);
    });

    if (loaded) return <Redirect to={Routes.draw.path} />;
    return <SplashScreen />;
}

export default AppScreen;