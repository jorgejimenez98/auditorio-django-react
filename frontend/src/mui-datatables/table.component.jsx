import React from 'react'
import MUIDataTable from "mui-datatables";

function CustomTableComponent({title, data, columns, options}) {
    return (
        <div>
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    )
}

export default CustomTableComponent;
