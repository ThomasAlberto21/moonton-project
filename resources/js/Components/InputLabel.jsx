export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label
            htmlFor={forInput}
            className={`text-base font-bold block mb-2` + className}
        >
            {value ? value : children}
        </label>
    );
}
