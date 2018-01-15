export default (connection) => {
  console.log('Preparing to close database connection.');
  connection.close();
  console.log('Closed database connection.');
};
