const {addLesson, getLessonsPage} = require("../services/lesson.services");

const getPages = async (res, req) => {
    const {currentPage} = req?.body;

    try {
        const lessons = await getLessonsPage(currentPage);
        res.status(200).send(lessons);

    } catch (e) {
        console.error(e);
        res.status(500)
    }
}

const createLesson = async (res, req) => {
    const {name, type, url, description} = req?.body;

    try {
        const lessons = await getLessonsPage(name, type, url, description);
        res.status(200).send(lessons);

    } catch (e) {
        console.error(e);
        res.status(500)
    }
}

module.exports = {
    getPages,
    createLesson
}