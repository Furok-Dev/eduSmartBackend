const express = require('express');

const UniversityService = require('../services/university-service');

const universityesApi = (expressApp) => {
    const router = express.Router();
    expressApp.use('/api/universityes', router);
    const universityService = new UniversityService();
    router.post('/test', async(req, res) => {
        const { body: area } = req;
        try {
            const questions = await universityService.getUniversityes(area.q)
            res.status(200).json({
                data: questions
            });
        } catch (error) {
            res.status(400).json({
                message: 'error al traer las universidades',
            });
        }
    });
};

module.exports = universityesApi;