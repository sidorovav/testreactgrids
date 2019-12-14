import React from 'react';
import { DataGrid } from 'tubular-react';
import { ColumnModel } from 'tubular-common';
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const columns = [
    new ColumnModel('OrderID',{Label:'№'}),
    new ColumnModel('CustomerName'),
    new ColumnModel('ShipperCity')
  ];

const Mytable = () => {
    return (
        <DataGrid
            bottomPager={true}
            advancePagination={true}
            
            columns={columns}
            dataSource={'https://tubular.azurewebsites.net/api/orders/paged'}
            gridName='Grid'
            
        > 
        {/* <IconButton color='default' onClick={() => alert('I can help you to add features to your datagrid.')}>
            <AddIcon />
        </IconButton> */}
        </DataGrid>
    )
}

export default Mytable