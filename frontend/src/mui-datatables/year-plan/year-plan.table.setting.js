const columns = [
    // ano cantidadAudit diasAudit diasFeriad diasVacaciones
    // diasCapacitacion diasReservas controlInterno
    {
        name: "ano",
        label: "Ano",
        options: {
            hint: '',
        }
    },
    {
        name: "cantidadAudit",
        label: "Cantidad de auditorias",
        options: {
            hint: '',
            filterType: 'dropdown'
        }
    },
    {
        name: "diasAudit",
        label: "Dias Auditables",
        options: {
            hint: '',
        }
    },
    {
        name: "diasFeriad",
        label: "Dias Feriados",
        options: {
            hint: '',
        }
    },
    {
        name: "diasVacaciones",
        label: "Dias de vacaciones",
        options: {
            hint: '',
        }
    },
    {
        name: "diasCapacitacion",
        label: "Dias de capacitacion",
        options: {
            hint: '',
        }
    },
    {
        name: "diasReservas",
        label: "Dias de reserva",
        options: {
            hint: '',
        }
    },
    {
        name: "controlInterno",
        label: "Dias de control interno",
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

export const yearPlan = {
    columns: columns,
    options: options,
}