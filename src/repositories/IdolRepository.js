const { Idol } = require('../models')

class IdolRepository {

    async create(data) {
        const idol = await Idol.create(data);

        return idol;
    }

    async findAll(params) {
        const idols = await Idol.findAll(params);

        return idols;
    }

    async findByPk(pk) {
        const idol = await Idol.findByPk(pk);

        return idol;
    }

    async update(data) {
        const idol = await Idol.update(data, { where: { id: data.id } });

        return idol;
    }

    async destroy(pk) {
        const idol = await Idol.destroy({ where: { id: pk } });

        return idol;
    }

}

module.exports = new IdolRepository();