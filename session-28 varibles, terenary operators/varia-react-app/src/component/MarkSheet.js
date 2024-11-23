import React from 'react'

function MarkSheet(props) {
    let engMarks=Number(props.engMarks);
    let telMarks=Number(props.telMarks);
    let hinMarks=Number(props.hinMarks);
    let matMarks=Number(props.matMarks);
    let sciMarks=Number(props.sciMarks);
    let socMarks=Number(props.socMarks);
    let Total=engMarks+telMarks+matMarks+hinMarks+sciMarks+socMarks;
    let perc=(Total/600)*100;
  return (
    <div>
        <table>
            <caption>{props.studentName} MarkSheet</caption>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Max Marks</th>
                    <th>Marks Obtained</th>
                    <th>Result</th>
                    <th>Remarks</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>English</td>
                    <td>100</td>
                    <td>{engMarks}</td>
                    <td>{engMarks >=35 ? "Pass":"Fail"}</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>Telugu</td>
                    <td>100</td>
                    <td>{telMarks}</td>
                    <td>{telMarks >=35 ? "Pass":"Fail"}</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>Hindi</td>
                    <td>100</td>
                    <td>{hinMarks}</td>
                    <td>{hinMarks >=35 ? "Pass":"Fail"}</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>Maths</td>
                    <td>100</td>
                    <td>{matMarks}</td>
                    <td>{matMarks >=35 ? "Pass":"Fail"}</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>100</td>
                    <td>{sciMarks}</td>
                    <td>{sciMarks >=35 ? "Pass":"Fail"}</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>Social</td>
                    <td>100</td>
                    <td>{socMarks}</td>
                    <td>{socMarks >=35 ? "Pass":"Fail"}</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>Total Marks</td>
                    <td>600</td>
                    <td>{Total} [{perc.toFixed(2)}]</td>
                    <td>Pass</td>
                    <td>Good</td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
  )
}

export default MarkSheet