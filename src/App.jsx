import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultsTable from "./components/ResultsTable.jsx";
import data from './TABLE_HEADERS';
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment.js";

function App() {
    const [investmentResults, setInvestmentResults] = useState([]);


    // function handleInputChange(event) {
    //     const {name, value} = event.target;
    //
    //     setUserInput(prevState => {
    //         const updatedUserInput = {
    //             ...prevState,
    //             [name]: value
    //         };
    //
    //         return updatedUserInput;
    //     });

        // year: i + 1, // year identifier // YEAR
        // interest: interestEarnedInYear, // INTEREST (YEAR)
        // valueEndOfYear: investmentValue, // INVESTMENT VALUE
        // annualInvestment: annualInvestment, // N/A FUCK ME

        //      Year =>                 year
        //      Investment Value =>     valueEndOfYear
        //      Interest (Year) =>      interest
        //      Total Interest =>
        //      Invested Capital =>

        // handlePopulateTable();
    // }

    function handlePopulateTable() {
        let annualData = calculateInvestmentResults(userInput);
        for (let result of annualData) {
            result.valueEndOfYear = formatter.format(result.valueEndOfYear);
            result.interest = formatter.format(result.interest);
            result.annualInvestment = formatter.format(result.annualInvestment);
        }

        setInvestmentResults(annualData);

    }

    // console.log("userInput:", userInput);
    // console.log("investmentResults:", investmentResults);

    return (
        <>
            <Header />
            <UserInput />
            <ResultsTable headers={data.tableHeaders}/>
        </>
    );
}

export default App
