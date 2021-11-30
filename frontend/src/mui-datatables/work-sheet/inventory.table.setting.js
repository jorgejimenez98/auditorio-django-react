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
        name: "UM",
        label: "Unidad de medida",
        options: {
            hint: '',
            filterType: 'dropdown'
        }
    },
    {
        name: "SSubCant",
        label: "Cantidad segun submayor",
        options: {
            hint: '',
        }
    },
    {
        name: "SSubPrice",
        label: "Precio segun submayor",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "SSubImport",
        label: "Importe segun submayor",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "STECant",
        label: "Cantidad segun tarjeta de estiba",
        options: {
            hint: '',
        }
    },
    {
        name: "STETotal",
        label: "Total segun tarjeta de estiba",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "SContCant",
        label: "Cantidad segun conteo",
        options: {
            hint: '',
        }
    },
    {
        name: "SContTotal",
        label: "Total segun conteo",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "dif",
        label: "Diferencia",
        options: {
            hint: '',
        }
    },
    {
        name: "actions",
        label: "Acciones",
        options: {
            hint: '',
            filter: false,
            sort: false,
            download: false,
            print: false,
            searchable: false,
            viewColumns: false,
        }
    },
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