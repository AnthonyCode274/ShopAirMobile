var userService = require('../services/userServices');

exports.getAllUser = async function getAllUser(){
    return await userService.getAllUser();
}

exports.getUserByID = async function getUserByID(id){
    return await userService.getUserByID(id);
}
exports.addUser = async function addUser(params) {
    let {username, email, phoneNumber, password, avatar, location, idSP, productState} = params
    let user = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      avatar: avatar,
      location: location,
      idSP: idSP._id,
      productState: productState,
    }
    await userService.addUser(user);
}

exports.editUser = async function editUser(id, params){
  let {username, email, phoneNumber, password, avatar, location, idSP, productState} = params
    let userEdit = {id, username, email, phoneNumber, password, avatar, location, idSP, productState}
    await userService.editUser(userEdit)
}

exports.remove = async function removeUserByID(id){
   let data = await userService.remove(id)
    return data
};
