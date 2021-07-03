import Button from 'src/components/button';
import { useInternetIdentity } from 'src/context/internet-identity';


export default function AuthScreen () {

    const { authenticate } = useInternetIdentity();
    
    return (
        <>
            <Button onClick={() => authenticate()}>Authenticate</Button>
        </>
    )
}