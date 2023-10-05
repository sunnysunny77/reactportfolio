import { useEffect, useState } from 'react';

const PageScroll = (props) => {

    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

    useEffect(() => {

        const sleep = (milliseconds) => {

            return new Promise(resolve => setTimeout(resolve, milliseconds));
        }

        const page = async () => {

            const obj = props.children.ref.current;
            const line = obj.scrollHeight - obj.clientHeight;

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
            if (bool === false && count < line) {
                setCount(count + 1);
            }
            if (bool === true && count > 0) {
                setCount(count - 1);
            }
            obj.scroll(0, count);
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
