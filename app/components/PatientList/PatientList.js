/**
 * A react component to list patients in the PersOnS Project
 */

import React from 'react';

/**
 * Renders a list of patients as a table.
 */
class PatientList extends React.Component {
  render() {
    var rows = [];
    this.props.data.forEach(function(row) {
      rows.push(<tr key={row.Patient}><td><a href={`/variants/${encodeURI(row.Patient)}`}>{row.Patient}</a></td></tr>);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Patient</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default PatientList;
