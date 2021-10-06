import { IconButton, Tooltip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { LinkContainer } from "react-router-bootstrap";

export const columns = [
  {
    name: "id",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "name",
    label: "Nombre Completo",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "email",
    label: "Correo",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta) => {
        return <a href={`mailto:${value}`}>{value}</a>;
      },
    },
  },
  {
    name: "rol",
    label: "Rol",
    options: {
      filter: true,
      sort: true,
      filterType: "dropdown",
      customBodyRender: (value) => {
        const rol = value;
        const color =
          rol === "Administrador"
            ? "bg-primary"
            : rol === "Rector"
            ? "bg-secondary"
            : rol === "Jefe de Plan"
            ? "bg-success"
            : rol === "Auditor"
            ? "bg-warning"
            : "bg-danger";
        return (
          <h5>
            <span className={`badge ${color}`}>{rol}</span>
          </h5>
        );
      },
    },
  },
  {
    name: "Acciones",
    label: "",
    options: {
      filter: false,
      viewColumns: false,
      sort: false,
      print: false,
      download: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        const userName = tableMeta.rowData[1];
        const userId = tableMeta.rowData[0];
        return (
          <LinkContainer to={`/admin/users/edit/${userId}`}>
            <Tooltip title={`Editar Usuario: ${userName}`} placement="bottom">
              <IconButton>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </LinkContainer>
        );
      },
    },
  },
];
