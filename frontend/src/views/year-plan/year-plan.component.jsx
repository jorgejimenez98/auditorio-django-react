import React, { useEffect } from 'react'

import { yearPlan } from '../../mui-datatables/year-plan/year-plan.table.setting';
import CustomTableComponent from '../../mui-datatables/table.component';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function YearPlanComponent({ history }) {
    
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
                    title='Plan anual'
                    data={[]}
                    columns={yearPlan.columns}
                    options={yearPlan.options}
                />
            </Grid>
            <Grid item>
                <Link to='/admin/new/year-plan'>
                    <Button variant='contained' color='success'>
                        Nuevo
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default YearPlanComponent;
