import { Add } from '@mui/icons-material';
import { Card, Checkbox, Drawer, Fab, IconButton, Stack, Tooltip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '../core/Typography';
import { deleteLeave, fetchUsersLeaves } from '../redux/action';
import Leaveform from './leaveform';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import { Add } from '@mui/icons-material';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

function Leavereport() {
  const [openForm, setOpenForm] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const leaveformpage = () => {
    setOpenForm(prev => !prev);
  }

  const select = useSelector((state) => state.leave.user);
  console.log("leave select....", select);

  const data = select.map((x, ind) => {
    return { "id": ind + 1, ...x }
  })

  useEffect(() => {
    dispatch(fetchUsersLeaves());
  }, []);

  const handleDeleteId = (id) => {
    console.log("id===", id);
    dispatch(deleteLeave(id));
  }

  const handleEvent = (id) => {
    setUser({ id });
    console.log("user====", user);
    leaveformpage();
  }

  const columns = [
    {
      flex: 0.2,
      field: 'start_date',
      headerName: 'Start Date',
      width: 165,
      editable: false,
    },
    {
      flex: 0.2,
      field: 'end_date',
      headerName: 'End Date',
      width: 165,
      editable: false,
    },
    {
      flex: 0.2,
      field: 'description',
      headerName: 'Reason',
      sortable: false,
      width: 165,
  
    },
    {
      flex: 0.2,
      field: 'type',
      headerName: 'Type',
      sortable: false,
      width: 165,
      editable: false,
      
    },
    {
      flex: 0.2,
      field: 'isPaid',
      headerName: 'Paid / Unpaid',
      sortable: false,
      width: 165,
      editable: false,
      renderCell: (params) => (
        <Checkbox checked={params.value}  />
      ),
    },
    {
      flex: 0.15,
      minWidth: 120,
      sortable: false,
      field: "actions",
      headerName: "Actions",
      renderCell: ({ row }) => (
        <>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEvent(row)} >
              <EditIcon fontSize="small" sx={{ mr: 0, color: 'blue' }} >
              </EditIcon>
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteId(row["_id"])}>
              <DeleteIcon fontSize="small" sx={{ mr: 0, color: 'red' }} />
            </IconButton>
          </Tooltip>
        </>
      ),
    }
  
  ];

  return (
    <>

    <ToastContainer />
      <Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center' marginX='20px'>
          <Typography>
            Leave
          </Typography>
          <Fab style={{ position: "absulate", zIndex: 'auto' }} color='primary' aria-label='add' size='small' onClick={leaveformpage}>
            <Add />
          </Fab>
        </Stack>
        <Drawer anchor='right' open={openForm} onClose={leaveformpage} sx={{ position: "relative", zIndex: '9999', width: "100vw" }}>
          <Leaveform />
        </Drawer>
      </Stack>
      <Card style={{ height: 400, maxwidth: '100vw', margin: "20px" }}>
        <DataGrid
          rows={data}
          columns={columns}
          rowsPerPageOptions={[5, 10, 20, 25, 100]}
          pagination
          sx={{ fontSize: "16px", "& .MuiDataGrid-cell--textRight": { display: "flex", justifyContent: 'left' } }}
        />
      </Card>
    </>
  )
}

export default Leavereport