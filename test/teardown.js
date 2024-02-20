module.exports = async function (globalConfig, projectConfig) {
  await globalThis.__momodb__.Sequelize.drop();
  await globalThis.__momodb__.Sequelize.close();
};
