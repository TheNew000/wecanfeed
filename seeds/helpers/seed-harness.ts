import * as Promise from 'bluebird'

export default (Model, mocks) => {
  console.log(`Seeding ${Model.modelName} collection.`);

  return mocks.map((mock) => {
    return new Promise((resolve, reject) => {
      mock.save()
      .then((record) => {
        // console.log(`Seeded ${Model.modelName} record.`, record);
        resolve(record);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
    });
  });
};
