import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../dummyData";
import {DeleteOutline,Edit} from '@mui/icons-material'
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {

    const [data,setData] = useState(productRows);

    const handleDelete =(id)=>{
        return (
         setData(data.filter((item)=>item.id !== id))
        )
     };
    
     const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Product',
          width: 150,
        //   editable: true,
          renderCell:(params)=>{
            return(
                <div className="flex items-center">
                  <img src={params.row.img} alt="" className="w-[32px] h-[32px] rounded-full object-cover mr-[10px]"/>
                  {params.row.name}
                </div>
            )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
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
          field: 'price',
          headerName: 'Price',
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
                        <Link to={'/product/'+params.row.id}>
                           <Edit className="text-blue-600 cursor-pointer mr-[18px]"/>
                        </Link>
                           <DeleteOutline className="text-red-600 cursor-pointer" onClick={()=>handleDelete(params.row.id)}/>
                    </div>
                )
            }
        }
      ];

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
 
export default ProductList;