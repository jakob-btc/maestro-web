import React from 'react';

const GoTop = ({scrollStepInPx, delayInMs}) => {

    const [thePosition, setThePosition] = React.useState(false);
    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });
    }, [])
    
    const onScrollStep = () => {
        if (window.pageYOffset === 0){
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    }

    const renderGoTopIcon = () => {
        return (
            <>
                <div className={`go-top ${thePosition ? 'active' : ''}`} onClick={scrollToTop}>
                    <i className='ri-arrow-up-s-line'></i>

                    <style jsx>{`
                        .go-top {
                            position: fixed;
                            cursor: pointer;
                            bottom: -100px;
                            right: 20px;
                            color: var(--white-color);
                            background-color: var(--main-color);
                            z-index: 4;
                            width: 45px;
                            text-align: center;
                            height: 45px;
                            opacity: 0;
                            visibility: hidden;
                            border-radius: 50%;
                            font-size: 22px;
                            transition: var(--transition);
                            overflow: hidden;
                            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
                        }
                        .go-top i {
                            position: absolute;
                            right: 0;
                            left: 0;
                            top: 45%;
                            transform: translateY(-45%);
                            text-align: center;
                            font-size: 30px;
                            margin-left: auto;
                            margin-right: auto;
                        }
                        .go-top.active {
                            opacity: 1;
                            visibility: visible;
                            bottom: 20px;
                        }
                        .go-top:hover {
                            background-color: var(--optional-color);
                            color: var(--white-color);
                            transition: var(--transition);
                            box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
                            transform: translateY(-5px);
                        }
                    `}</style> 
                </div>
            </>
        )
    }

    return (
        <>
            {renderGoTopIcon()}
        </>
    )
}

export default GoTop;