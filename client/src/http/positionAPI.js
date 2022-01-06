import { $host, $authHost } from "./index";

export const createPosition = async (name) => {
    const {data} = await $host.post('api/positions', {name});
    return data;
}

export const getPosition = async () => {
    const {data} = await $host.get('api/positions');
    return data;
}

export const delPosition = async (id) => {
    const {data} = await $host.delete('api/positions/' + id);
    return data;
}

export const upPosition = async (id, name) => {
    const {data} = await $host.put('api/positions/' + id, {name});
    return data;
}