import { ReactNode } from 'react';
import { useContextBridge } from '@react-three/drei';
import { CanistersContext } from './canisters';
import { DecksContext } from './decks';
import { InternetIdentityContext } from './internet-identity';
import { AccelerometerContext } from './device-accelerometer';

// https://docs.pmnd.rs/react-three-fiber/advanced/gotchas#consuming-context-from-a-foreign-provider
// For some reason this doesn't work, but initializing the bridge in the component containing the canvas does.
// Not exported because it doesn't actually work.

// function ContextBridge ({children}: {children?: ReactNode}) {
//     const Bridge = useContextBridge(
//         AccelerometerContext,
//         CanistersContext,
//         InternetIdentityContext,
//         DecksContext,
//     );
//     return <Bridge children={children} />
// };