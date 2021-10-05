import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../redux/user/user.actions";
import {
  AddButtomListHeader,
  Loader,
  Message,
  WarningAdminDeletionModal,
} from "../../containers";
import { columns } from "../../settings/mui-datatable/users-list/columns";
import { listOptions } from "../../settings/mui-datatable/users-list/list-options";
import MUIDataTable from "mui-datatables";
import { FaTrash } from "react-icons/fa";
import { Tooltip, IconButton } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";
import ConfirmationDialog from "../../containers/ConfirmationDialog";
import { setSnackbar } from "../../redux/snackbar/snackbar.actions";
import { UserActionTypes } from "../../redux/user/user.types";
import { logout, deleteUsers } from "../../redux/user/user.actions";

function UserList({ history }) {
  const [showModal, setShowModal] = useState(false);
  const [showWarningError, setShowWarningError] = useState(false);
  const [rowsToDelete, setRowsToDelete] = useState([]);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user.userLogin);

  // User List Selector
  const { loading, error, users } = useSelector((state) => state.user.userList);

  // User DELETE Selector
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.user.userDelete);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAdmin) {
      history.push("/403");
    } else {
      dispatch(getUserList());

      if (successDelete) {
        const message = "Usuarios Eliminados Satisfactoriamente";
        dispatch(setSnackbar(true, "success", message));
        dispatch({ type: UserActionTypes.USER_DELETE.RESET });
      }
    }

    return () => {
      dispatch({ type: UserActionTypes.USER_DELETE.RESET });
    };
  }, [history, userInfo, dispatch, successDelete]);

  // Manage Custom Toolbar Select
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
      dispatch(deleteUsers(rowsToDelete));
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
  const confirmDelete = () => {
    dispatch({ type: UserActionTypes.USER_DELETE.RESET });
    dispatch(deleteUsers(rowsToDelete));
    dispatch(logout());
  };

  return (
    <React.Fragment>
      {loadingDelete && <Loader />}
      {errorDelete && <Message type="error" message={errorDelete} />}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error} />
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
