/**
 * role.model.js
 *
 * Use Mongoose to build a Role Schema for ['user','moderator','admin']
 */
const mongoose = require('mongoose');

/*const RoleSchema = mongoose.Schema({
  name: {
      type: String, //['user','moderator','admin']
      required: true,
      trim: true,
      default: 'user',
      lowercase: true,

      //index: true, TODO: Research index, sparse and unique for schema
  },
});

module.exports = mongoose.model('Role', RoleSchema);*/



const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Role;