const {createLesson, getAllLessons} = require("../repositories/lessons.mysq.repository");

const addLesson = (name, type, url, description) => {
    return createLesson(name, type, url, description);
}

const getLessonsPage = (currentPage) => {
    return getAllLessons(currentPage);
}

module.exports = {
    addLesson,
    getLessonsPage
}