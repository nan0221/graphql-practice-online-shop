import gql from 'graphql-tag'

// query all products
export const ALL_PRODUCTS = gql`
    query AllProducts {
        products {
            id
            name
            price
            desc
            photo
        }
    }
`

// Find product by id
export const FIND_PRODUCT = gql`
    query Product($id: ID!) {
        product(id: $id) {
            id
            name
            price
            desc
            photo
        }
    }
`

// update product details
export const UPDATE_PRODUCT = gql`
    mutation updateProduct($id: ID!, $input: ProductUpdateInput) {
        updateProduct(id: $id, input: $input) {
            id
            name
            price
            desc
            photo
        }
    }
`

// add new product
export const CREATE_PRODUCT = gql`
    mutation createProduct($name: String, $price: String, $photo: String, $desc:String) {
        createProduct(name: $name, price: $price, photo: $photo, desc: $desc) {
            name
            price
            desc
            photo
        }
    }
`

// delete product by id
export const DELETE_PRODUCT = gql`
    mutation deleteProduct($id: ID!) {
        deleteProduct(id: $id) {
            id
        }
    }
`

// query customer details
export const LOGIN_CUSTOMER = gql`
    query customer($email: String!) {
        customer(email: $email) {
            email
            password
            products
            role
        }
    }
`

// add new customer
export const SIGNUP_CUSTOMER = gql`
    mutation createCustomer($email: String!, $password: String, $firstName: String, $lastName: String, $address: String, $phone: String) {
        createCustomer(email: $email, password: $password, firstName: $firstName, lastName: $lastName, address: $address, phone: $phone) {
            email
            password
        }
    }
`

// add products to customer shopping cart
export const ADD_PRODUCT_BY_CUSTOMER = gql`
    mutation updateCustomer($email: String!, $data: CustomerUpdateInput) {
        updateCustomer(email: $email, data: $data) {
            products
        }
    }
`



// subscribe to product creation
export const PRODUCT_CREATED = gql `
    subscription {
        productCreated {
            id
            name
            price
            desc
            photo
        }
    }
`

// subsribe to product deletion
export const PRODUCT_DELETED = gql `
    subscription {
        productDeleted {
            id
        }
    }
`