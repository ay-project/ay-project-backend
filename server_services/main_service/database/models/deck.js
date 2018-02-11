'use strict';
module.exports = (sequelize, DataTypes) => {
  var Deck = sequelize.define('Deck', {}, {});
  Deck.associate = function(models) {
    Deck.belongsToMany(models.Card, {through: 'Deck_Card'});
    Deck.hasOne(models.Player, {foreignKey: 'id', as: 'PlayerId'});
    Deck.hasOne(models.Job, {foreignKey: 'id', as: 'JobId'});
  }
  return Deck;
};