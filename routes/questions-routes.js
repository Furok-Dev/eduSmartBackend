const express = require('express');

const QuestionsService = require('../services/questionService');

const questionApi = (app) => {
    const router = express.Router();
    app.use('/api/questions', router);
    const questionService = new QuestionsService();

    router.get('/', async(req, res) => {
        try {
            const questions = await questionService.getAllQuestions();
            res.status(200).json({
                data: questions,
                message: 'funciono hdp',
            });
        } catch (error) {
            res.status(400).json({
                message: 'error al traer las preguntas',
            });
        }
    });
};

module.exports = questionApi;