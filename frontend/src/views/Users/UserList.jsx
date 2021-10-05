import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../redux/user/user.actions";
import { AddButtomListHeader, Loader, Message, WarningAdminDeletionModal } from "../../containers";
import { columns } from "../../settings/mui-datatable/users-list/columns";
import { listOptions } from "../../settings/mui-datatable/users-list/list-options";
import MUIDataTable from "mui-datatables";
import { FaTrash } from "react-icons/fa";
import { Tooltip, IconButton } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";
import ConfirmationDialog from "../../containers/ConfirmationDialog";
import { setSnackbar } from "../../redux/snackbar/snackbar.actions";
import { UserActionTypes } from "../../redux/user/user.types";
import { logout } from '../../redux/user/user.actions'

function UserList({ history }) {
  const [showModal, setShowModal] = useState(false);
  const [showWarningError, setShowWarningError] = useState(false);
  const [rowsToDelete, setRowsToDelete] = useState([]);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user.userLogin);

  // User List Selector
  const { loading, error, users } = useSelector((state) => state.user.userList);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAdmin) {
      history.push("/403");
    } else {
      dispatch(getUserList());
    }
  }, [history, userInfo, dispatch]);

  listOptions.customToolbarSelect = ({ data }) => {
    return (
      <React.Fragment>
        <Tooltip title="Eliminar Usuarios Seleccionados" className="mr-2">
          <IconButton
            onClick={() => {
              let items = [];
              data.forEach((element) => {
                items.push(users[element.dataIndex]);
              });
              setRowsToDelete(items);
              setShowModal(true);
            }}
          >
            <FaTrash />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  };

  // Add Buttom to insert users to the table
  listOptions.customToolbar = () => {
    return (
      <AddButtomListHeader
        addLink="/admin/users/form"
        title="Insertar Usuario"
      />
    );
  };

  // Function to Close Modal
  const closeDialog = () => {
    setShowModal(false);
  };

  // Get Count Of Administrators on table
  const getAdministratorsCount = (array) => {
    let count = 0;
    array?.forEach((user) => {
      if (user.isAdmin) {
        count += 1;
      }
    });
    return count;
  };

  // Function to delete the selected users
  const agreeConfirm = () => {
    setShowModal(false);
    const administratorCount = getAdministratorsCount(users);
    const administratorsToDelete = getAdministratorsCount(rowsToDelete);

    console.log(administratorCount, administratorsToDelete);

    if (administratorCount === administratorsToDelete) {
      showShackBar(
        "error",
        "Lo sentimos, no puede dejar el sistema sin administradores"
      );
      setShowWarningError(false);
    } else if (
      rowsToDelete.find((user) => user.email === userInfo.email) &&
      administratorCount !== administratorsToDelete
    ) {
      setShowWarningError(true);
    } else {
      setShowWarningError(false);
      console.log("Eliminar 111", rowsToDelete);
    }
  };

  // Show Snackbar
  const showShackBar = (type, message) => {
    dispatch(setSnackbar(true, type, message));
  };

  // Close Warning Error Modal
  const closeWarningModal = () => {
    setShowWarningError(false);
  };

  // Confirm Delete After User Login Warning
  const confirmDelete = (items) => {
    // User Delete Reset
    //dispatch(deleteUsers(items));
    console.log('Eliminar Usuarios 22', rowsToDelete)
    dispatch(logout());
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message color="error" message={error} />
      ) : (
        users && (
          <Fade bottom duration={1000} distance="40px">
            {/* Table */}
            <MUIDataTable
              title={`Listado de Usuarios (${users.length})`}
              data={users}
              columns={columns}
              options={listOptions}
            />

            {/* Confirm Dialog */}

            <ConfirmationDialog
              open={showModal}
              closeDialog={closeDialog}
              agreeConfirm={agreeConfirm}
              type="Usuarios"
            />

            {/* Error Confirmation Delete */}
            {/* En caso de q el admin se valla a autoeliminar mostrar mensaje de advertencia */}
            <WarningAdminDeletionModal
              closeModal={closeWarningModal}
              showModal={showWarningError}
              confirmDelete={confirmDelete}
            />
          </Fade>
        )
      )}
    </React.Fragment>
  );
}

export default UserList;
