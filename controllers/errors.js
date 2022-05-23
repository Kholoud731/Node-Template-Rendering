exports.renderNotFound = (req, res, next)=>{
    res.status(404).render("notFound",{title:"Not found"})
}