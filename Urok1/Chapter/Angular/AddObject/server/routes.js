module.exports = function (app) {
    var main = require ('./app/controllers/main');
    app.get('/main', main.getAllPostsApi);
    app.post('/main', main.addPostApi);
    app.delete('/main/:id', main.deleteTopicsNoteApi);
    app.put('/main', main.changeTopicsNoteApi);
};
