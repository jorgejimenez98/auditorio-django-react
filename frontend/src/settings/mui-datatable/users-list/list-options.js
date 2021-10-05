export const listOptions = {
  filterType: "textField",
  responsive: "vertical",
  searchPlaceholder: "Escribe aquí",
  rowsPerPage: 10,
  rowsPerPageOptions: [5, 10, 15, 25, 100],
  selectableRows: "multiple",
  download: true,
  print: false,
  viewColumns: true,
  filter: true,
  downloadOptions: {
    filename: `Usuarios Auditoria`,
    filterOptions: {
      useDisplayedColumnsOnly: true,
      useDisplayedRowsOnly: true,
    },
  },
  textLabels: {
    body: {
      noMatch: "No se encontraron resultados",
      toolTip: "Ordenar",
      columnHeaderTooltip: (column) => `Ordenar por ${column.label}`,
    },
    pagination: {
      next: "Siguiente Página",
      previous: "Página anterior",
      rowsPerPage: "Columnas x página:",
      displayRows: "de",
    },
    toolbar: {
      search: "Buscar",
      downloadCsv: "Descargar CSV",
      print: "Imprimir",
      viewColumns: "Ver Columnas",
      filterTable: "Filtrar",
    },
    filter: {
      all: "TODOS",
      title: "FILTROS",
      reset: "RESETEAR",
    },
    viewColumns: {
      title: "Mostrar Columnas",
      titleAria: "Mostrar/Ocultar Columnas de la tabla",
    },
    selectedRows: {
      text: "columna(s) seleccionadas",
      delete: "Eliminar",
      deleteAria: "Eliminar columnas seleccionadas",
    },
  },
};

export default listOptions;
