var multer = require('multer');

module.exports = function(app, connection) {

  var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, __dirname + '/public/users/');
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    }
  });

  var upload = multer({ storage : storage });

  // Users (home) route
  app.get('/', function(req, res){
    connection.query('SELECT * FROM Users', function(err, rows) {
      res.render('index', {users : rows});
    });
  });

  //Route to particular user
  app.get('/user/:id', function(req, res){
    var id = req.params.id;
    function getUser(id, callback){
      connection.query('SELECT * FROM Users WHERE Users.Id = ?', [id], function(err, userRows) {
        connection.query('SELECT * FROM Groups INNER JOIN UsersToGroups ON Groups.Id = UsersToGroups.GroupId', function(err, groupRows){
          callback(userRows[0], groupRows);
        });
      });
    }
    getUser(id, function(user, groups){
      res.render('user', {user : user, groups : groups});
    });
  });

  // New userForm route
  app.get('/users/new', function(req, res){
    connection.query('SELECT * FROM Groups', function(err, rows){
      res.render('admin/userForm', {user : {}, groups : rows});
    });
  });

  // New user submit route
  app.post('/', upload.single('Image'), function(req, res){
    console.log('body: ', req.body);
    console.log('file: ',req.file);
    var queryUser = 'INSERT INTO Users (Name, Surname, Position, Image) VALUES (?, ?, ?, ?)';
    connection.query(queryUser, [req.body.Name, req.body.Surname, req.body.Position, '/static/users/'+req.file.filename], function(err, rows){
      if (err) throw err;
    });
    res.redirect('/');
  });

  // Delete user route
  app.get('/users/delete/:id', function(req, res){
    var id = req.params.id;
    var queryDeleteUser = 'DELETE FROM NFQ.Users WHERE Users.Id = ?';
    connection.query(queryDeleteUser, [id], function(err,rows){
      if (err) throw err;
    });
    res.redirect('/');
  });

  //Groups route
  app.get('/groups', function(req, res){
    var queryGroup = 'SELECT * FROM Groups';
    function getResults(callback) {
      connection.query(queryGroup, function(err, groupRows) {
          var queryUsers = 'SELECT Name, Surname, Image, Users.Id, GroupId FROM UsersToGroups JOIN Users ON UsersToGroups.UserId = Users.Id';
          connection.query(queryUsers, function(err, userRows) {
            // console.log('userRows', userRows);
            callback(groupRows, userRows);
          });
        });
      }
    getResults(function(groups, users){
      res.render('groups', {groups : groups, users : users});
    });
  });

  // New group submit route
  app.post('/groups', upload.single('Picture'), function(req, res){
    console.log('file: ',req.file);
    var queryGroup = 'INSERT INTO Groups (Title, Picture) VALUES (?, ?)';
    connection.query(queryGroup, [req.body.Title, '/static/groups/'+req.file.filename], function(err, rows){
      if (err) throw err;
    });
    res.redirect('/groups');
  });

  // Delete group route
  app.get('/groups/delete/:id', function(req, res){
    var id = req.params.id;
    var queryDeleteGroup = 'DELETE FROM NFQ.Groups WHERE Groups.Id = ?';
    connection.query(queryDeleteGroup, [id], function(err, rows){
      if (err) throw err;
    });
    res.redirect('/groups');
  });

  // Add user to group route
  app.post('/user/:id', upload.single(), function(req, res){
    console.log('BODY :', req.body);
    console.log('PARAMS :', req.params);
    var id = req.params.id;
    var query = 'INSERT INTO UsersToGroups (UserId, GroupId) VALUES (?, ?)'
    connection.query(query, [id, req.body.GroupId], function(err, rows){
      if (err) throw err;
    });
    res.redirect('/user/'+id);
  });

  // Delete user from group route
  app.get('/user/remove/:userId/:groupId', function(req, res){
    console.log('PARAMS :', req.params);
    var userId = req.params.userId;
    var groupId = req.params.groupId;
    var queryDeleteGroup = 'DELETE FROM NFQ.UsersToGroups WHERE UserId = ? AND GroupId = ?';
    connection.query(queryDeleteGroup, [userId, groupId], function(err, rows){
      if (err) throw err;
    });
    res.redirect('/groups');
  });









}
