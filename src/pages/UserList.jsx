import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../dummyData";
import {DeleteOutline,Edit} from '@mui/icons-material'
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
    const [data,setData] = useState(userRows);

    const handleDelete =(id)=>{
       return (
        setData(data.filter((user)=>user.id !== id))
       )
    };
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User Name',
          width: 150,
        //   editable: true,
          renderCell:(params)=>{
            return(
                <div className="flex items-center">
                  <img src={params.row.avatar} alt="" className="w-[32px] h-[32px] rounded-full object-cover mr-[10px]"/>
                  {params.row.username}
                </div>
            )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
        //   editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 110,
        //   editable: true,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
          //   editable: true,
          },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <div>
                        <Link to={'/user/'+params.row.id}>
                           <Edit className="text-blue-600 cursor-pointer mr-[18px]"/>
                        </Link>
                           <DeleteOutline className="text-red-600 cursor-pointer" onClick={()=>handleDelete(params.row.id)}/>
                    </div>
                )
            }
        }
      ];

    //   const rows = [
    //     { id: 1, username: 'John Snow',avatar:amari,email:'hon@gmail.com',status:'active',transaction:'$120.00'},
    //     { id: 2, username: 'Johnny Snow',avatar:amari,email:'hon@gmail.com',status:'active',transaction:'$120.00'},
    //     { id: 3, username: 'John Snow',avatar:amari,email:'hon@gmail.com',status:'active',transaction:'$120.00'},
    //     { id: 4, username: 'John Snow',avatar:amari,email:'hon@gmail.com',status:'active',transaction:'$120.00'},
    //     { id: 5, username: 'John Snow',avatar:amari,email:'hon@gmail.com',status:'active',transaction:'$120.00'},
    //     { id: 6, username: 'John Snow',avatar:amari,email:'hon@gmail.com',status:'active',transaction:'$120.00'},
    //     { id: 7, username: 'John Snow',avatar:amari,email:'hon@gmail.com',status:'active',transaction:'$120.00'},
    //     { id: 8, username: 'John Snow',avatar:amari,email:'hon@gmail.com',status:'active',transaction:'$120.00'},
    //     { id: 9, username: 'John Snow',avatar:amari,email:'hon@gmail.com',status:'active',transaction:'$120.00'}
    //   ];

    return (  
        <div className="flex-[4]">
           <Box>
               <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
           </Box>
        </div>
    );
}
 
export default UserList;