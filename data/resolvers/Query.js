async function products(parent, args, context) {
    const allProducts = await context.prisma.products()
    return allProducts
}

async function product(parent, args, context) {
    const product = await context.prisma.product({
        id: args.id
    })
    return product
}

async function customer(parent, args, context) {
    const customer = await context.prisma.customer({
        email: args.email
    })
    return customer
}

module.exports = {
    products,
    product,
    customer
}