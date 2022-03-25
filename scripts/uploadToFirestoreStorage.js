const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');

const serviceAccount = require("../firestore.json");
var path = require('path');

bucketName = 'teste-gabriel-sofia.appspot.com'
initializeApp({
  credential: cert(serviceAccount),
  storageBucket: bucketName
});

const bucket = getStorage().bucket();

//======================================

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';

// The path to your file to upload
const upload_image = (filePath) => {

  //const filePath = '/home/rafael/Pesquisa/Street Pavement/Pavement Type Perception Safety/fake_streets_pav-to-unpav/-7.9607_-34.82984999999999_heading=180_raw.png/-7.9607_-34.82984999999999_heading=180.png';

  // The new ID for your GCS file
  const destFileName = path.join('imagens/naopavimentadas/originais', path.basename(filePath))

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function uploadFile() {
    //await storage.bucket(bucketName).upload(filePath, {
      await bucket.upload(filePath, {
      destination: destFileName,
    });

    console.log(`${filePath} uploaded to ${bucketName}`);
  }

  uploadFile().catch(console.error);

}

module.exports = {
  upload_image
}