export default (collections) => {
  console.log('Preparing to drop collections.');
  collections.forEach(({Model}) => {
    console.log(`Dropping ${Model.modelName} collection.`);
      Model.remove({}, () => {
      console.log(`Dropped ${Model.modelName} collection.`);
    });
  });
};
