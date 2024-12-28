import Input from "./Input.jsx";
import { useState } from "react";

export default function UserInput() {
    // const { initialInvestment, annualInvestment, expectedReturn, duration } = userInput;
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUserInput((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        name="initialInvestment"
                        value={userInput.initialInvestment}
                        onChange={handleChange}
                        required/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        name="annualInvestment"
                        value={userInput.annualInvestment}
                        onChange={handleChange}
                        required/>
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        name="expectedReturn"
                        value={userInput.expectedReturn}
                        onChange={handleChange}
                        required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        name="duration"
                        value={userInput.duration}
                        onChange={handleChange}
                        required/>
                </p>
            </div>
        </section>
    );
}