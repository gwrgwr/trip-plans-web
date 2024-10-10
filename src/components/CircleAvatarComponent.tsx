export const CircleAvatarComponent = (props: {
    src: string;
    alt: string;
}) => {
    return (
        <img className="rounded-full w-96 h-96" src={props.src} alt={props.alt}/>
    );
};