const { increaseVotes, getById } = require("../model/reactionsModel");

module.exports = (io) =>
  io.on('connection', (socket) => {
    socket.on('increaseVotes', async ({id}) => {
      await increaseVotes(id)
      const emote = await getById(id)
      io.emit('refreshCurrentVotes', emote )
    });
  });