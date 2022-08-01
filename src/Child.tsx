import React, { useCallback, useEffect, useRef, useState } from 'react';

export type IChildProps = {

}
let tt = 1;

const Child: React.FC<{ getName: (a: string) => void }> = (props) => {
    const { getName } = props;
    const [name, setName] = useState('');
    const isFirstRender = useRef(true)

    const memoizedCallback = useCallback(() => {
        setName("" + tt++);
    }, [setName]);

    useEffect(() => {
        isFirstRender.current = false;
    }, [])

    if (!isFirstRender.current) {
        getName(name);
    }

    return (
        <div>
            {name}
            <button onClick={memoizedCallback}>Click me</button>
        </div>
    );
}

export { Child };