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

module.exports = {
    products,
    product
}