const columns = [
    // yearPlan entity subordinated codNIT codREEUP
    // startDate endDate 
    {
        name: "author",
        label: "Autor",
        options: {
            hint: '',
        }
    },
    {
        name: "yearPlan",
        label: "Plan Anual",
        options: {
            hint: '',
            filterType: 'dropdown',
        }
    },
    {
        name: "noWO",
        label: "Numero de orden",
        options: {
            hint: '',
        }
    },
    {
        name: "auditType",
        label: "Tipo de auditoria",
        options: {
            hint: '',
        }
    },
    {
        name: "actionType",
        label: "Tipo de accion",
        options: {
            hint: '',
        }
    },
    {
        name: "criteria",
        label: "Criterio",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "directives",
        label: "Directivas",
        options: {
            hint: '',
            filter: false,
            display: false,
            viewColumns: false
        }
    },
    {
        name: "system",
        label: "Sistema automatizado a aplicar",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "staff",
        label: "Equipo de trabajo",
        options: {
            hint: '',
            filter: false,
            display: false,
            viewColumns: false
        }
    },
    {
        name: "entity",
        label: "Entidad a auditar",
        options: {
            hint: '',
        }
    },
    {
        name: "subordinated",
        label: "Subordinada a ...",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "address",
        label: "Direccion",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "province",
        label: "Provincia",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "municipality",
        label: "Municipio",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "codNIT",
        label: "Codigo NIT",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "codREEUP",
        label: "Codigo REUUP",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "NAE",
        label: "Nomenclatura de la actividad economica",
        options: {
            hint: '',
            display: false
        }
    },
    {
        name: "FORG",
        label: "Forma organizaiva",
        options: {
            hint: '',
            filter: false,
            display: false,
            viewColumns: false
        }
    },
    {
        name: "unidadPres",
        label: "Unidad presupuestada",
        options: {
            hint: '',
            filter: false,
            display: false,
            viewColumns: false
        }
    },
    {
        name: "cubanStateEntrpSys",
        label: "Sistema empresarial Cubano",
        options: {
            hint: '',
            filter: false,
            display: false
        }
    },
    {
        name: "isPerfecting",
        label: "Empresa en perfeccionamiento",
        options: {
            hint: '',
            filter: false,
            display: false,
            viewColumns: false
        }
    },
    {
        name: "merchantSociety",
        label: "Sociedad mercantil",
        options: {
            hint: '',
            filter: false,
            display: false,
            viewColumns: false
        }
    },
    {
        name: "startDate",
        label: "Fecha de inicio",
        options: {
            hint: '',
        }
    },
    {
        name: "endDate",
        label: "Fecha de fin",
        options: {
            hint: '',
            filter: false,
            display: false,
            viewColumns: false
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

export const workOrderTableSetting = {
    columns: columns,
    options: options,
}