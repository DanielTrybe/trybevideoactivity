const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = () =>
  connection().then((db) => db.collection('votes').find({}).toArray());

const increaseVotes = (id) => {
  console.log('passei do socket e to inserindo o valor');
  connection().then((db) =>
    db
      .collection('votes')
      .updateOne({ _id: ObjectId(id) }, { $inc: { votes: 1 } }),
  );
}

  const getById = (id) =>
  connection().then((db) =>
    db.collection('languages').findOne({ _id: ObjectId(id) }),
  );

module.exports = {
  getAll,
  increaseVotes,
  getById
};
