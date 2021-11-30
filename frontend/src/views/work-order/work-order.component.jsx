import { Button, Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomTableComponent from '../../mui-datatables/table.component';
import { workOrderTableSetting } from '../../mui-datatables/work-order/work-order.table.setting';

function WorkOrderComponent({ history }) {

    // USER INFO Selector
    const { userInfo } = useSelector((state) => state.user.userLogin);
    useEffect(() => {
        if (!userInfo) {
            history.push("/login");
        }
    }, [history, userInfo]);


    return (
        <Grid container spacing={2} justifyContent='flex-end'>
            <Grid item>
                <CustomTableComponent
                    title='Ordenes de trabajo'
                    data={[]}
                    columns={workOrderTableSetting.columns}
                    options={workOrderTableSetting.options}
                />
            </Grid>
            <Grid item>
                <Link to='/admin/new/work-order'>
                    <Button
                        variant='contained'
                    >
                        Nuevo
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default WorkOrderComponent;
