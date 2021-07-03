import { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Button from 'src/components/button';
import { InternetIdentityContext } from 'src/context/internet-identity';


export default function AuthScreen () {

    const { authenticate, isAuthed } = useContext(InternetIdentityContext);
    const { state } = useLocation<{referrer: string}>();
    const success = state?.referrer || '/draw-selection';
    
    if (isAuthed) {
        return <Redirect to={success} />
    }

    return (
        <>
            <Button onClick={() => authenticate()}>Authenticate</Button>
        </>
    )
}