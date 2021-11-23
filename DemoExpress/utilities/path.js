exports.ImageUrl = function ImageUrl(req) {
    let path = req.protocol + "://" + req.headers.host + "/images/";
    return path
}