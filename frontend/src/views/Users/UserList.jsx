import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../redux/user/user.actions";
import { AddButtomListHeader, Loader, Message } from "../../containers";
import { columns } from "../../settings/mui-datatable/users-list/columns";
import { listOptions } from "../../settings/mui-datatable/users-list/list-options";
import MUIDataTable from "mui-datatables";
import { FaTrash } from "react-icons/fa";
import { Tooltip, IconButton } from "@material-ui/core";

function UserList({ history }) {
  const [showModal, setShowModal] = useState(false);
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
        addLink="/admin/users/add"
        title="Insertar Usuario"
      />
    );
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message color="error" message={error} />
      ) : (
        <MUIDataTable
          title={`Listado de Usuarios (${users?.length})`}
          data={users}
          columns={columns}
          options={listOptions}
        />
      )}
    </React.Fragment>
  );
}

export default UserList;
