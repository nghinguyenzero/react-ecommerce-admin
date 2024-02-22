
import { 
    Button, IconButton, 
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
    TextField, 
    Typography 
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Grid from "@mui/material/Unstable_Grid2"


import * as Yup from 'yup'
import {Formik, ErrorMessage, Form, Field} from 'formik'
import { useState } from "react";

export default function Products() {
    console.log('product');
    const [initialValue, setInitialValues] = useState({
        _id : -1,
        name: '',
        price: '',
        quantity: '',
        sku: '',
        description : ''
    })
    const [open, setOpen] = useState(false)

    const validateSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        quantity: Yup.number().required('Quantity is required'),
        price: Yup.number().required('Price is required'),
        sku: Yup.number().required('SKU is required'),
        description: Yup.string().required('Description is required'),
    })

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
        setInitialValues({
            _id : -1,
            name: '',
            price: '',
            quantity: '',
            sku: '',
            description : ''   
        })
        setOpen(true)
    }
    
    const handleEditProduct = (product) => {
        setInitialValues(product)
        console.log('edit', {product});
        setOpen(true)
    } 
    const handleDeleteProduct = (product) => {
        console.log('delete', product);
    } 
    const handleSubmit = (values) =>{
        values._id = Math.random()*1000
        products.push(values)
        console.log('sub', values);
        setOpen(false)
    }
    
    return ( 
    <>
        <Typography sx={{mb:1}} variant="h4">Products</Typography>
        <Button startIcon={<AddIcon/>} variant="contained" onClick={handleAddProduct}>
            Add products
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
                            <IconButton onClick={()=>handleEditProduct(item)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={()=>handleDeleteProduct(item)}>
                                <DeleteForeverIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
        <Dialog 
            open={open} 
            fullWidth
            maxWidth='lg'
        >
            <DialogTitle>Add product</DialogTitle>
            <Formik
                initialValues={initialValue} validationSchema={validateSchema}
                onSubmit={handleSubmit}
            >{ ({ dirty, isValid, getFieldProps}) => (
            <Form>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid xs={12}>
                            <Field 
                                as={TextField}
                                name='name'
                                label='Name'
                                required
                                fullWidth
                            />
                            <ErrorMessage name="name">
                                {(message =>(
                                <Typography color={'red'}>{message}</Typography>
                                ))}
                            </ErrorMessage>
                        </Grid>
                        <Grid xs={12}>
                            <Field 
                                as={TextField}
                                name='price'
                                label='Price'
                                required
                                fullWidth
                            />
                            <ErrorMessage name="price">
                                {(message =>(
                                <Typography color={'red'}>{message}</Typography>
                                ))}
                            </ErrorMessage>
                        </Grid>
                        <Grid xs={12}>
                            <Field 
                                as={TextField}
                                name='quantity'
                                label='Quantity'
                                required
                                fullWidth
                            />
                            <ErrorMessage name="quantity">
                                {(message =>(
                                <Typography color={'red'}>{message}</Typography>
                                ))}
                            </ErrorMessage>
                        </Grid>
                        <Grid xs={12}>
                            <Field 
                                as={TextField}
                                name='sku'
                                label='Sku'
                                required
                                fullWidth
                            />
                            <ErrorMessage name="sku">
                                {(message =>(
                                <Typography color={'red'}>{message}</Typography>
                                ))}
                            </ErrorMessage>
                        </Grid>
                        <Grid xs={12}>
                            <Field 
                                as={TextField}
                                name='description'
                                label='Description'
                                required
                                fullWidth
                            />
                            <ErrorMessage name="description">
                                {(message =>(
                                <Typography color={'red'}>{message}</Typography>
                                ))}
                            </ErrorMessage>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    {
                        getFieldProps('_id').value !== -1 ? (
                        <Button 
                            disabled={!dirty || !isValid} 
                            type="submit" variant="container" color='primary'
                        > Save Edit
                        </Button>
                        ) : (
                        <Button 
                            disabled={!dirty || !isValid} type="submit" 
                            variant="container" color='primary'
                            >Save</Button>
                        )
                    }
                    <Button onClick={()=>setOpen(false)} autoFocus>Cancel</Button>

                </DialogActions>
            </Form>
            )}
            </Formik>

        </Dialog>
    </> );
}
