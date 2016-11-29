import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import DocumentRow from './DocumentRow';

const tableData = [
  {
    date: '21.09.2011',
    name: 'Составление сметы',
    statusDescription: 'Ready',
    isReady: true,
  },
  {
    date: '12.12.2013',
    name: 'Составление сметы 2',
    statusDescription: 'Ready',
    isReady: true,
  },
  {
    date: '01.07.2013',
    name: 'Составление сметы',
    statusDescription: 'Подписание главным юристом',
    isReady: false,
  },
  {
    date: '21.09.2015',
    name: 'Акт о банкротстве',
    statusDescription: 'Рассматривается судом',
    isReady: false,
  },
  {
    date: '5.09.2017',
    name: 'Договор купли-продажи',
    statusDescription: 'В работе',
    isReady: false,
  },
];

export default class MyDocuments extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      stripedRows: false,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
    };
  }

  render() {

    const colWidthDownload = {
      width: '2rem'
    };

    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn>Дата подачи заявки</TableHeaderColumn>
              <TableHeaderColumn>Название документа</TableHeaderColumn>
              <TableHeaderColumn>Статус готовности</TableHeaderColumn>
              <TableHeaderColumn style={colWidthDownload}>Скачать</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (document, index) => (
              <DocumentRow
                key={index}
                date={document.date}
                name={document.name}
                statusDescription={document.statusDescription}
                isReady={document.isReady}
                colWidthDownload={colWidthDownload}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}