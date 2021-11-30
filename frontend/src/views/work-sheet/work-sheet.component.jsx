import React, { useEffect, useState } from 'react'

import { inventoryTableSetting } from '../../mui-datatables/work-sheet/inventory.table.setting'
import CustomTableComponent from '../../mui-datatables/table.component'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function WorkSheetComponent({history}) {

    // USER INFO Selector
    const { userInfo } = useSelector((state) => state.user.userLogin);
    useEffect(() => {
        if (!userInfo) {
            history.push("/login");
        }
    }, [history, userInfo]);

    const [type, setType] = useState('inventory')

    const handleChange = (event) => () => {
        setType(event.target.value)
    }


    const content = () => {
        switch (type) {
            default:
                return (
                    <div>
                        <CustomTableComponent
                            title='Inventario'
                            data={[]}
                            columns={inventoryTableSetting.columns}
                            options={inventoryTableSetting.options}
                        />
                    </div>
                )

        }
    }

    return (
        <Grid container spacing={2} justifyContent='flex-end'>
            <Grid item xs={12}>
                {content()}
            </Grid>
            <Grid item>
                <FormControl
                    fullWidth
                    style={{ minWidth: '150px' }}
                >
                    <InputLabel id="demo-simple-select-label">Tipo de plantilla</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Tipo de plantilla"
                        onChange={handleChange}
                    >
                        <MenuItem value={'inventory'}>inventory</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Link to={`/admin/new/${type}`}>
                    <Button variant='contained' color='success'>
                        Nuevo
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default WorkSheetComponent;