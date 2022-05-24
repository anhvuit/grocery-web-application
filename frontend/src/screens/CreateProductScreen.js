import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
// import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import { createProduct } from '../actions/productActions'

const CreateProductScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [mrp, setmrp] = useState(0)
  const [imageSrc, setImageSrc] = useState('')
  const [imageAlt, setImageAlt] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  // const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productCreate = useSelector((state) => state.productCreate)
  const { loading, error, success } = productCreate

  // useEffect(() => {
  //   if (!product.name || product._id !== productId) {
  //     dispatch(listProductDetails(productId))
  //   } else {
  //     setName(product.name)
  //     setPrice(product.price)
  //     setImage(product.image)
  //     setImageAlt(product.imageAlt)
  //     setCategory(product.category)
  //     setCountInStock(product.countInStock)
  //     setDescription(product.description)
  //   }
  // }, [dispatch, history])

  useEffect(() => {
    if (success) {
      history.push('/admin/productlist')
    }
  }, [success, history])

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0]
  //   const formData = new FormData()
  //   formData.append('image', file)
  //   setUploading(true)

  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     }

  //     const { data } = await axios.post('/api/upload', formData, config)

  //     setImageSrc(data)
  //     setUploading(false)
  //   } catch (error) {
  //     console.error(error)
  //     setUploading(false)
  //   }
  // }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProduct({
        name,
        price,
        mrp,
        imageSrc,
        imageAlt,
        category,
        description,
        countInStock,
      }),
    )
  }

  return (
    <>
      <FormContainer>
        <h1>Create Product</h1>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-3" controlId="price">
            <Form.Label>MRP</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter MRP"
              value={mrp}
              onChange={(e) => setmrp(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image Src</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Image URL"
              value={imageSrc}
              onChange={(e) => setImageSrc(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* <Form.Group className='mt-2' controlId='image-file'>
            <Form.File
              id='image-file'
              size='sm'
              custom
              variant='secondary'
              onChange={uploadFileHandler}
            ></Form.File>
            {uploading && <Loader />}
          </Form.Group> */}

          <Form.Group className="my-3" controlId="brand">
            <Form.Label>Image Alt</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Image Alt"
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="countInStock">
            <Form.Label>Count In Stock</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Count InStock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button className="my-3" type="submit" variant="primary">
            Update
          </Button>
          <Link to="/admin/productlist" className="btn btn-light my-3 ms-3">
            Go Back
          </Link>
        </Form>
      </FormContainer>
    </>
  )
}

export default CreateProductScreen
