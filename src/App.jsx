import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultsTable from "./components/ResultsTable.jsx";
import data from './TABLE_HEADERS';
import { useState } from "react";

function App() {
    const [investmentResults, setInvestmentResults] = useState([]);

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(event) {
        const { name, value } = event.target;

        setUserInput((prevState) => {
            return {
                ...prevState,
                [name]: +value
            };
        });
    }


    return (
        <>
            <Header/>
            <UserInput onChangeInput={handleChange} userInput={userInput}/>
            {!inputIsValid && <p className="center">Duration must be at least 1 year</p>}
            {inputIsValid && <ResultsTable headers={data.tableHeaders} userInput={userInput}/>}
        </>
    );
}

export default App
