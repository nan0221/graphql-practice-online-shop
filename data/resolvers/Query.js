async function products(parent, args, context) {
    const allProducts = await context.prisma.products()
    return allProducts
}

module.exports = {
    products
}