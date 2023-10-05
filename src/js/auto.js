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

            await sleep(30);

            if (count === 0 || count === line) {
                await sleep(4970);
                if (count === 0) {
                    setBool(false);
                }
                if (count === line) {
                    setBool(true);
                }
            }

            if (bool === false) {
                setCount(count + 1);
                obj.scrollBy(0, 1);
                return
            }

            setCount(count - 1);
            obj.scrollBy(0, -1);
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
