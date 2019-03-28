const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')


async function createCustomer(root, args, context) {
    return context.prisma.createCustomer({ 
        email: args.email, 
        password: args.password,
        firstName: args.firstName,
        lastName: args.lastName,
        address: args.address,
        phone: args.phone,
        products: ''
    })
}

async function updateCustomer(root, args, context) {
    // only for addToShoppingCart function
    return context.prisma.updateCustomer({ 
        where: { email: args.email },
        data: {
            products: args.data.products
        }
    })
}

async function createProduct(root, args, context) {
    return context.prisma.createProduct({ 
        name: args.name,
        photo: args.photo,
        price: args.price,
        desc: args.desc
    })
}

async function updateProduct(root, args, context) {
    return context.prisma.updateProduct({
        where: {id: args.id},
        data: {
            name: args.input.name,
            price: args.input.price,
            photo: args.input.photo,
            desc: args.input.desc
        }
    })
}

async function deleteProduct(root, args, context) {
    return context.prisma.deleteProduct({ 
        id: args.id
    })
}

async function signup(parent, args, context) {
    const password = await bcrypt.hash(args.password, 10)
    const customer = await context.prisma.createCustomer({ ...args, password })
  
    const token = jwt.sign({ customerEmail: customer.email }, APP_SECRET)
  
    return {
      token,
      customer,
    }
  }
  
  async function login(parent, args, context) {
    const customer = await context.prisma.customer({ email: args.email })
    if (!customer) {
      throw new Error('No such customer found')
    }

    const valid = await bcrypt.compare(args.password, customer.password)
    const oldValid = args.password === customer.password
    if (!valid && !oldValid) {
      throw new Error('Invalid password')
    }
  
    return {
      token: jwt.sign({ customerEmail: customer.email }, APP_SECRET),
      customer,
    }
  }

module.exports = {
    createCustomer,
    updateCustomer,
    createProduct,
    updateProduct,
    deleteProduct,
    signup,
    login
}