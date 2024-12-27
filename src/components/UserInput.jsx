import Input from "./Input.jsx";

export default function UserInput({ onInputChange }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <Input label="Initial Investment" onChange={onInputChange} />
                <Input label="Annual Investment" onChange={onInputChange} />
            </div>
            <div className="input-group">
                <Input label="Expected Return" onChange={onInputChange} />
                <Input label="Duration" onChange={onInputChange} />
            </div>
        </div>
    );
}