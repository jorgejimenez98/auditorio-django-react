import { Edit } from "@material-ui/icons";

import { Tooltip, IconButton } from '@mui/material';
import { LinkContainer } from "react-router-bootstrap";

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
            customBodyRender: (value, tableMeta) => {
                const id = tableMeta.rowData[0];
                return (
                    <LinkContainer to={`/admin/yearPlan/edit/${id}`}>
                        <Tooltip title="Editar Plan Anual">
                            <IconButton>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                    </LinkContainer>
                );
            },
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