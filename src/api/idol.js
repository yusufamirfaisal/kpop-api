const IdolService = require('../services/IdolService');
const Router = require('express');
const IdolRoute = Router();

IdolRoute.post('/', async (req, res) => {
    try {
        const data = req.body;

        await IdolService.create(data);

        res.jsend.success('Idol successfully created');
    } catch (error) {
        res.jsend.error(error);
    }
});

IdolRoute.get('/', async (req, res) => {
    try {
        const idols = await IdolService.findAll();

        res.jsend.success(idols);
    } catch (error) {
        res.jsend.error(error);
    }
});

IdolRoute.get('/:id', async (req, res) => {
    try {
        const idol = await IdolService.findByPk(req.params.id);

        res.jsend.success(idol);
    } catch (error) {
        res.jsend.error(error);
    }
})

IdolRoute.put('/:id', async (req, res) => {
    try {
        const data = req.body;
        data.id = req.params.id;

        await IdolService.update(data);

        res.jsend.success('Idol successfully updated');
    } catch (error) {
        res.jsend.error(error);
    }
});

IdolRoute.delete('/:id', async (req, res) => {
    try {
        await IdolService.destroy(req.params.id);

        res.jsend.success('Idol successfully deleted');
    } catch (error) {
        res.jsend.error(error);
    }
});

module.exports = IdolRoute;