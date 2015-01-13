var users = require('../models/Users');

exports.getUsers = function() {
    return userModle.users;
}


exports.getUser = function(id) {
    for(var i=0;i< userModle.users.length;i++) {
        if(userModle.users[i].id==id)
            return userModle.users[i];
    }
}



exports.compareAuth=function(username,password) {
    for(var i=0;i< users.length;i++)
    {
        if(userModle.users[i].username==username && userModle.users[i].password == password)
        {
        //return true;
            return userModle.users[i];
        }
    }
    return false;
}

exports.postLogin=function(request,response){
    var result = users.compareAuth(request.body.email,request.body.password);
    if(result)
      
       {
           
    response.send("login sucessful. hiii"+result.name);
       }
    else
    {
        response.send("failed");
    }
}