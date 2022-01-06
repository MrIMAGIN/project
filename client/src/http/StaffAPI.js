import { $host, $authHost } from "./index";

export const createStaff = async (surname, name, patronymic, positionId) => {
    const {data} = await $host.post('api/staffs', {surname, name, patronymic, positionId});
    return data;
}

export const getStaff = async () => {
    const {data} = await $host.get('api/staffs');
    return data;
}

export const delStaff = async (id) => {
    const {data} = await $host.delete('api/staffs/' + id);
    return data;
}

export const upStaff = async (id, surname, name, patronymic, positionId) => {
    const {data} = await $host.put('api/staffs/' + id, {surname, name, patronymic, positionId});
    return data;
}