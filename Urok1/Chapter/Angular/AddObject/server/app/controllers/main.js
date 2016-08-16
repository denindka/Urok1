var topics = [{
    id: 1,
    title: 'Denis'
}, {
    id: 2,
    title: 'Stas'
}];

module.exports.getAllPostsApi = function getAllPostsApi(req, res) {
    res.send(topics);
};

module.exports.addPostApi = function addPostApi(req, res) {
    var title = req.body.title;
    console.log(req.body);
    topics.push({
        id: topics.length + 1,
        title: title
    });
    res.send('success');
};

module.exports.deleteTopicsNoteApi = function deleteTopicsNoteApi(req, res) {
    var id = req.params.id;
    for (var i = 0; i < topics.length; i++) {
        if (topics[i].id == id) {
            topics.splice(i, 1);
            res.send('Success');
        }
    }

};
module.exports.changeTopicsNoteApi = function changeTopicsNoteApi(req, res) {
    var id = req.body.id;
    var title = req.body.title;
    for (var i = 0; i < topics.length; i++) {
        if (topics[i].id == id) {
            console.log(topics[i].id);
            topics[i].title = title;
        }

    }

    // var title = req.body.title;

};
