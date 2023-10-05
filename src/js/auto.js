import { useEffect, useState } from 'react';

const PageScroll = (props) => {

    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(true);

    const sleep = (milliseconds) => {

        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    useEffect(() => {

        const obj = props.children.ref.current;
        const line = obj.scrollHeight - obj.clientHeight;

        const page = async () => {

            await sleep(30);

            if (count === 0) {
                await sleep(4970);
                setBool(true);
            }

            if (count === line) {
                await sleep(4970);
                setBool(false);
            }

            if (bool === false) {
                obj.scrollBy(0,-1);
                setCount(count - 1);
                return
            }

            obj.scrollBy(0,1);
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
