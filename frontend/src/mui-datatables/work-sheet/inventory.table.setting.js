/* [
    {
        "author": "Juan Perez",
        "yearPlan": {
            "id": 2,
            "year": 2021
        },
        "workOrder": {
            "id": 1,
            "noWO": 5
        },
        "dateTimeCreate": "2021-11-29 - 22:29:15",
        "inventoryItems": [
            {
                "id": 1,
                "sContCant": 1,
                "sContTotal": 1,
                "sSubCant": 1,
                "sSubPrice": 1,
                "sTeCant": 1,
                "sTeTotal": 1,
                "um": "asd",
                "code": "asd",
                "description": "asdasd",
                "diff": 2,
                "inventory": 1
            },
            {
                "id": 2,
                "sContCant": 1,
                "sContTotal": 2,
                "sSubCant": 1,
                "sSubPrice": 2,
                "sTeCant": 2,
                "sTeTotal": 2,
                "um": "asd",
                "code": "asd",
                "description": "asd",
                "diff": 1,
                "inventory": 1
            }
        ]
    },
] */

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