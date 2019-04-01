function productCreatedSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.product({ mutation_in: ['CREATED'] }).node()
}

function productUpdatedSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.product({ mutation_in: ['UPDATED'] }).node()
}

function productDeletedSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.product({ mutation_in: ['DELETED'] }).node()
}

function customerUpdatedSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.customer({ mutation_in: ['UPDATED'] }).node()
}
  
const productCreated = {
    subscribe: productCreatedSubscribe,
    resolve: payload => {
        return payload
    },
}

const productUpdated = {
    subscribe: productUpdatedSubscribe,
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

const customerUpdated = {
    subscribe: customerUpdatedSubscribe,
    resolve: payload => {
        return payload
    },
}

module.exports = {
    productCreated,
    productUpdated,
    productDeleted,
    customerUpdated
}