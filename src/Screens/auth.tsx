import { useContext } from 'react';
import Button from 'src/components/button';
import { InternetIdentityContext } from 'src/context/internet-identity';


export default function AuthScreen () {

    const { authenticate, isAuthed } = useContext(InternetIdentityContext);

    return (
        <>
            <div style={{color: 'white'}}>Authed: {isAuthed ? 'Yes' : 'No'}</div>
            <Button onClick={() => authenticate()}>Authenticate</Button>
        </>
    )
}