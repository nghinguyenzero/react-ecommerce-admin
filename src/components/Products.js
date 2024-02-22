import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

function Products() {

    const products = [
        {
            _id: 1,
            name:'Bage Acer',
            quantity: 1,
            sku: 120000,
            description: 'Cool bage',
        },
        {
            _id: 2,
            name:'Bage Dell',
            quantity: 5,
            sku: 220000,
            description: 'Laptop bage',
        }
    ]
    const handleAddProduct = () => {
        console.log('add');
    } 
    return ( <>
    <Typography sx={{mb:1}} variant="h4">Products</Typography>
    <Button startIcon={<AddIcon/>} variant="contained" onClick={handleAddProduct}>
        Add product
    </Button>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>STT </TableCell>
                    <TableCell>Name </TableCell>
                    <TableCell>Price </TableCell>
                    <TableCell>Qty </TableCell>
                    <TableCell>Sku </TableCell>
                    <TableCell>Description </TableCell>
                    <TableCell>Action </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((item, index)=> <TableRow key={item._id}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.sku}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                        <IconButton>
                            <DeleteForeverIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    </TableContainer>
    </> );
}

export default Products;