import apiClient from "@/admin/helpers/apiClient";

export const createService = (serviceName) => {
    return {
        all(filters) {
            return apiClient.get(`${serviceName}`, {params: filters});
        },
        find(uuid) {
            return apiClient.get(`${serviceName}/${uuid}`);
        },
        save(model) {
            return model.uuid
                ? this.update(model)
                : this.create(model);
        },
        create(model) {
            return apiClient.post(`${serviceName}`, {...model});
        },
        update(model) {
            return apiClient.post(`${serviceName}/${model.uuid}`, {...model, _method: 'put'});
        },
        destroy({uuid}) {
            return apiClient.post(`${serviceName}/${uuid}`, {_method: 'delete'});
        }
    }
}
