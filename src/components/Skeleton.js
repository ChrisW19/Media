import classNames from "classnames";

function Skeleton({ times, className })  {
    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-blue-200',
        'rounded',
        'mb-2.5',
        className
    );
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-blue-200',
        'via-white',
        'to-gray-200'
    );

    //Create a new array with the number of items based on times prop.
    const renderedBoxes = Array(times).fill(0).map((_, i) => {
        return <div key={i} className={outerClassNames}>
            <div className={innerClassNames}/>
            </div>;
    });

    return renderedBoxes;
};

export default Skeleton;