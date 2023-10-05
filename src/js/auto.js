import { useEffect, useState } from 'react';

const sleep = (milliseconds) => {

    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const PageScroll = (props) => {

    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(null);

    useEffect(() => {

        const obj = props.children.ref.current;
        const line = obj.scrollHeight - obj.clientHeight;

        const page = async () => {

            obj.scrollTo(0, count);
            await sleep(45);

            if (count === 0) {
                setBool(true);
                await sleep(4955);
            }

            if (count === line) {
                setBool(false);
                await sleep(4955);
            }

            if (bool === false) {
                return setCount(count - 1);
            }

            setCount(count + 1);
        }

        page();
    }, [count, bool, props.children.ref]);
    return (
        <>
            {props.children}
        </>
    )
}

export default PageScroll;
