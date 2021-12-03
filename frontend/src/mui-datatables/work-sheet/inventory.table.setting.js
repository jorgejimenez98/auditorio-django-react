
import { Edit } from "@material-ui/icons";
import { IconButton, Tooltip } from "@mui/material";
import { LinkContainer } from "react-router-bootstrap";

const columns = [
    // yearPlan entity subordinated codNIT codREEUP
    // startDate endDate 
    {
        name: "code",
        label: "Codigo",
        options: {
            hint: '',
        }
    },
    {
        name: "description",
        label: "Descripcion",
        options: {
            hint: '',
        }
    },
    {
        name: "um",
        label: "Unidad de medida",
        options: {
            hint: '',
            filterType: 'dropdown'
        }
    },
    {
        name: "sSubCant",
        label: "Cantidad segun submayor",
        options: {
            hint: '',
        }
    },
    {
        name: "sSubPrice",
        label: "Precio segun submayor",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "sSubImport",
        label: "Importe segun submayor",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "sTeCant",
        label: "Cantidad segun tarjeta de estiba",
        options: {
            hint: '',
        }
    },
    {
        name: "sTeTotal",
        label: "Total segun tarjeta de estiba",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "sContCant",
        label: "Cantidad segun conteo",
        options: {
            hint: '',
        }
    },
    {
        name: "sContTotal",
        label: "Total segun conteo",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "diff",
        label: "Diferencia",
        options: {
            hint: '',
        }
    },
    // {
    //     name: "actions",
    //     label: "Acciones",
    //     options: {
    //         hint: '',
    //         filter: false,
    //         sort: false,
    //         download: false,
    //         print: false,
    //         searchable: false,
    //         viewColumns: false,
    //         customBodyRender: (value, tableMeta) => {
    //             const id = tableMeta.rowData[0];
    //             return (
    //                 <LinkContainer to={`/admin/inventories/edit/${id}`}>
    //                     <Tooltip title="Editar Plan Anual">
    //                         <IconButton>
    //                             <Edit />
    //                         </IconButton>
    //                     </Tooltip>
    //                 </LinkContainer>
    //             );
    //         },
    //     }
    // },
];

const options = {
    filterType: 'textField',
    resizableColumns: true,
    rowsPerPageOptions: [5, 10, 15],
    selectToolbarPlacement: 'above',
}

export const inventoryTableSetting = {
    columns: columns,
    options: options,
}