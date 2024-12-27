export default function ResultsTable({ headers}) {
    return (
        <table id="result">
            <thead>
                <tr>
                    {headers.map((header, index) => <th key={`${"header-"}` + index}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>item 1</td>
                    <td>item 2</td>
                    <td>item 3</td>
                    <td>item 4</td>
                    <td>item 5</td>
                </tr>
            </tbody>
        </table>
    );
}