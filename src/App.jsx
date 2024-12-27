import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import React from "react";
import ResultsTable from "./components/ResultsTable.jsx";
import data from './TABLE_HEADERS';

function App() {
    const [userInput, setUserInput] = React.useState({});

    function handleInputChange(event) {
        const {name, value} = event.target;
        setUserInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    }

    return (
        <>
            <Header/>
            <UserInput/>
            <ResultsTable headers={data.tableHeaders} onInputChange={handleInputChange} />
        </>
    );
}

export default App
