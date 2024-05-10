const {con} = require('./../services/mysql.services');

const createLesson = async (name, type, url, description) => {
    return await con.query(`
        INSERT INTO lesson (lessonName, type, url, description)
         VALUES(?, ?, ?, ?)
        `);
};

const getAllLessons = async (currentPage) => {
    const page = currentPage || 1;
    const perPage = 10;
    const offset = (page - 1) * perPage;

    const query = `SELECT * FROM lesson LIMIT ${perPage} OFFSET ${offset};`

   return await con.query(query, (err, results) => {
      if(err) {
          throw new Error('Помилка запиту до бази даних: ' + err.stack);
      }

      return results;
   });

};

module.exports = {
    createLesson,
    getAllLessons
}

