async function createCustomer(root, args, context) {
    return context.prisma.createCustomer(
        { email: args.email, password: args.password }
    )
}

async function createProduct(root, args, context) {
    return context.prisma.createProduct({ 
        name: args.name,
        photo: args.photo,
        desc: args.desc
    })
}

async function updateProduct(root, args, context) {
    // console.log("args: " + JSON.stringify(args))
    return context.prisma.updateProduct({
        where: {id: args.id},
        data: {
            name: args.input.name,
            price: args.input.price,
            photo: args.input.photo,
            desc: args.input.desc
        }
    }

    )
}

module.exports = {
    createCustomer,
    createProduct,
    updateProduct
}