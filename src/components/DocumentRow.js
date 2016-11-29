import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { greenA200, grey200 } from 'material-ui/styles/colors';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';


const DocumentRow = React.createClass({
  getInitialState () {
    return {
      hovered: false
    };
  },
  render() {

    let statusDescription;
    let downloadIcon;

    if (this.props.isReady) {
      statusDescription = "Готов";
      downloadIcon = (
        <DownloadIcon color={greenA200} />
      );
    } else {
      statusDescription = this.props.statusDescription;
      downloadIcon = (
        <DownloadIcon color={grey200} />
      );
    }

    return (
      <TableRow
        key={this.props.key}
        hoverable={true}
      >
        <TableRowColumn>{this.props.date}</TableRowColumn>
        <TableRowColumn>{this.props.name}</TableRowColumn>
        <TableRowColumn>{statusDescription}</TableRowColumn>
        <TableRowColumn style={this.props.colWidthDownload}>{downloadIcon}</TableRowColumn>
      </TableRow>
    )
  },
});

export default DocumentRow;
