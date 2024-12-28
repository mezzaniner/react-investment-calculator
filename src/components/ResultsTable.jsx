import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function ResultsTable({ headers, userInput }) {
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    {headers.map((header, index) => <th key={index}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {resultsData.map((result) => {
                    const totalInterest =
                        result.valueEndOfYear -
                        result.annualInvestment *
                        result.year;

                    const totalAmountInvested = result.valueEndOfYear - totalInterest;

                    return <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}