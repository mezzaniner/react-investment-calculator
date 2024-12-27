import Input from "./Input.jsx";

export default function UserInput() {
    return (
        <div id="user-input">
            <div className="input-group">
                <Input label="Initial Investment" />
                <Input label="Annual Investment" />
            </div>
            <div className="input-group">
                <Input label="Expected Return" />
                <Input label="Duration" />

            </div>
        </div>
    );
}