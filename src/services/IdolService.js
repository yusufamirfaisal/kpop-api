const { sequelize } = require('../models');
const IdolRepository = require('../repositories/IdolRepository');

class IdolService {

    async create(data) {
        let t = await sequelize.transaction();
        try {
            data.birth_name = data.birth_name.replace(/\s+/g, ' ').trim();
            data.stage_name = data.stage_name.replace(/\s+/g, ' ').trim();

            const existingData = await IdolRepository.findAll({
                where: data
            }, { transaction: t });

            if (existingData.length > 0) throw new Error('Idol already exist');

            const idol = await IdolRepository.create(data, { transaction: t });

            await t.commit();
            return idol
        } catch (error) {
            await t.rollback();
            console.error(error);
            throw error;
        }
    }

    async findAll() {
        try {
            const idols = await IdolRepository.findAll();

            return idols
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findByPk(pk) {
        try {
            const idol = await IdolRepository.findByPk(pk);

            if (!idol) throw new Error('Idol with this ID not found');

            return idol;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async update(data) {
        let t = await sequelize.transaction();
        try {
            data.birth_name = data.birth_name.replace(/\s+/g, ' ').trim();
            data.stage_name = data.stage_name.replace(/\s+/g, ' ').trim();

            let pk = data.id;

            delete data.id;

            const existingData = await IdolRepository.findAll({
                where: data
            }, { transaction: t });

            if (existingData.length > 0 && existingData[0].id !== pk) throw new Error('Idol already exist');

            data.id = pk

            const idol = await IdolRepository.update(data, { transaction: t });

            await t.commit();
            return idol;
        } catch (error) {
            await t.rollback();
            console.error(error);
            throw error;
        }
    }

    async destroy(pk) {
        try {
            const idol = await IdolRepository.destroy(pk);

            return idol;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

module.exports = new IdolService();