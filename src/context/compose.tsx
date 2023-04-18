import React from 'react';

interface Props {
    components: {order: number; component: React.ComponentType}[];
    children?: React.ReactNode
}

export default function Compose ({ components, children }: Props) {
    return <>
        {components.sort((a, b) => a.order - b.order).reverse().reduce((acc, provider) => {
            return <provider.component>{acc}</provider.component>
        }, children)}
    </>;
}
