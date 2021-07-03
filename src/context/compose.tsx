import { ComponentType, Fragment, ReactNode } from 'react';

type Components = ComponentType | [ComponentType, { [key: string]: any }];

interface Props {
    components: Components[];
    children?: ReactNode
}

export default function Compose ({ components, children }: Props) {
    return (
        <Fragment>
            {components.reverse().reduce((acc, curr) => {
                const [Provider, props] = Array.isArray(curr) ? [curr[0], curr[1]] : [curr, {}];
                return <Provider {...props}>{acc}</Provider>;
            }, children)}
        </Fragment>
    );
}
