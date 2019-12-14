import React from 'react'
import MaterialTable from 'material-table'

const Table = ({resource}) => {
    const data = resource.photos.read()
    const loc = {
        pagination: {
            labelDisplayedRows: '{from}-{to} из {count}',
            labelRowsPerPage: 'Строк',
            labelRowsSelect:'Строк'
        },
        toolbar: {
            nRowsSelected: '{0} строк(s) выбраны',
            searchTooltip: 'Поиск',
            searchPlaceholder: 'Поиск'
        },
        header: {
            actions: 'Actions'
        },
        body: {
            emptyDataSourceMessage: 'Отсутствуют данные',
            filterRow: {
                filterTooltip: 'Фильтр'
            }
        }
    };
    const handleCheckboxClick = (rowData) => {
        console.log(rowData);
        this.setState({
          selectedItems: {
            ...rowData,
            tableData: {
              checked: true,
            }
          }
        })
      }
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          localization = {loc}
          title="Фотки"
          columns={[
            { title: 'Id', field: 'id' },
            { title: 'Нзвание', field: 'title' },
            { title: 'Ссылка', field: 'url',
              render: rowData => (
                <img
                  style={{ height: 36, borderRadius: '20%' }}
                  src={rowData.url}
                />
              ),
            }
            
            // { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            // { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}
        //   data={[{ title: 'Просто фотка', url: 'https://via.placeholder.com/600/1ee8a4'}]}
          data={data}
          options={{
            selection: true
          }}
          actions={[
            {
              tooltip: 'Remove All Selected Users',
              icon: 'delete',
              onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
            }
          ]}
        />
      </div>
    )
}
export default Table;

