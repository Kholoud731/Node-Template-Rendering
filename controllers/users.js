const users = []

exports.getAllUsers = (req,res,next) => {
    res.render('home',{title:'Home', users: users})
}

exports.getAddUser = (req,res,next) => {
    res.render("addUser",{title: "Add User"})
}

exports.postUsers = (req,res,next) => {
    users.push({name: req.body.name})
    res.redirect('/')
}