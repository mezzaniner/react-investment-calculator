export default function ResultsTable({ headers }) {

    return (
        <table id="result">
            <thead>
                <tr>
                    {headers.map((header, index) => <th key={index}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {/*{investmentResults && investmentResults.map((result, index) =>*/}
                {/*    <tr key={index}>*/}
                {/*        <td>{result.year}</td>*/}
                {/*        <td>{result.valueEndOfYear}</td>*/}
                {/*        <td>{result.interest}</td>*/}
                {/*        <td>{}</td>*/}
                {/*        <td>{result.annualInvestment}</td>*/}
                {/*    </tr>*/}
                {/*)}*/}
            </tbody>
        </table>
    );
}