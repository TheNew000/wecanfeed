import * as Promise from 'bluebird'

export default (Model, mocks) => {
  console.log(mocks.length)

  console.log(`Seeding ${Model.modelName} collection.`);

  const allMockPromises = mocks.map((mock) => {
    console.log(mock)
    return new Promise((resolve, reject) => {
      mock.save()
      .then((record) => {
        console.log(`Seeded ${Model.modelName} record.`, record);
        resolve(record);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
    });
  });

  return Promise.all([allMockPromises])
  .then(() => {
    console.log(`Seeded ${mocks.length} records in ${Model.modelName} collection.`);
  })
  .catch((error) => {
    console.error(error);
  });
};
