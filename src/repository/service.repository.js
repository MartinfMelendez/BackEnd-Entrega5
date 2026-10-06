//Utilizamos el DAO 

import { readServices,writeServices } from "../DAO/service.dao.js"
async function getAll() {

    return await readServices()
}


async function getById(id) {

    const services = await readServices()

    return services.find(
        service => service.id === Number(id)
    )
}


async function create(service) {

    const services = await readServices()

    const newId = services.length > 0
        ? Math.max(...services.map(service => service.id)) + 1
        : 1

    const newService = {
        id: newId,
        ...service
    }

    services.push(newService)

    await writeServices(services)

    return newService
}


async function update(id, data) {

    const services = await readServices()

    const index = services.findIndex(
        service => service.id === Number(id)
    )

    if (index === -1) {
        return null
    }

    const updatedService = {
        ...services[index],
        ...data,
        id: services[index].id
    }

    services[index] = updatedService

    await writeServices(services)

    return updatedService
}


async function remove(id) {

    const services = await readServices()

    const index = services.findIndex(
        service => service.id === Number(id)
    )

    if (index === -1) {
        return null
    }

    const deletedService = services.splice(index, 1)[0]

    await writeServices(services)

    return deletedService
}


export {
    getAll,
    getById,
    create,
    update,
    remove
}
