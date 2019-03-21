function productCreatedSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.product({ mutation_in: ['CREATED'] }).node()
}

function productDeletedSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.product({ mutation_in: ['DELETED'] }).node()
}
  
const productCreated = {
    subscribe: productCreatedSubscribe,
    resolve: payload => {
        return payload
    },
}

const productDeleted = {
    subscribe: productDeletedSubscribe,
    resolve: payload => {
        return payload
    },
}

module.exports = {
    productCreated,
    productDeleted
}