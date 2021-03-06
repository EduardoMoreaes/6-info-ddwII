const sequelize = require("sequelize");

const dbconfig = require("./dbconfig");

const conexao = new sequelize(dbconfig);

const Usuario = require("../src/model/Usuario");

Usuario.init(conexao);

module.exports = conexao;