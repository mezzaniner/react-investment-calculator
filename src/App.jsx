import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import React from "react";
import ResultsTable from "./components/ResultsTable.jsx";
import data from './TABLE_HEADERS';

function App() {
    return (
        <>
            <Header/>
            <UserInput/>
            <ResultsTable headers={data.tableHeaders}/>
        </>
    );
}

export default App
