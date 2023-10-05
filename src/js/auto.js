import { useEffect, useState } from 'react';

const PageScroll = (props) => {

    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(null);

    useEffect(() => {

        const obj = props.children.ref.current;
        const line = obj.scrollHeight - obj.clientHeight;

        const sleep = (milliseconds) => {

            return new Promise(resolve => setTimeout(resolve, milliseconds));
        }

        const page = async () => {

            if (count === 0) {
                await sleep(4970);
                setBool(true);
            }

            if (count === line) {
                await sleep(4970);
                setBool(false);
            }

            if (bool === false) {
                await sleep(30);
                setCount(count - 1);
                obj.scrollBy(0,-1);
                return
            }

            await sleep(30);
            setCount(count + 1);
            obj.scrollBy(0,1);
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
