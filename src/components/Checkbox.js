export default function Chackbox({text, ...rest}) {
    return(
        <label>
            <input type="checkbox" {...rest} />
            <span> {text}</span>
        </label>
    );
}