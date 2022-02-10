/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const functions = require('firebase-functions');
var serviceAccount = require('./service-account.json');
const cors = require('cors')({ origin: true });
const axios = require('axios');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.helloWorld = functions.https.onRequest(
  (request, response) => {
    functions.logger.info('Hello logs!', { structuredData: true });
    response.send('Hello from Firebase!');
  },
);

// exports.createWalletAddress = functions.auth
//   .user()
//   .onCreate(async (user) => {
//     const options = {
//       method: 'POST',
//       url: 'https://www.wolframcloud.com/obj/christianp/MyProjects/FindingSpaces/API/v1/wallet',
//       data: {
//         network: 'testnet',
//       },
//       headers: {
//         'Content-Type': 'application-json',
//       },
//     };

//     try {
//       const address = (await axios(options)).data;
//       console.log(address.Data);

//       const userData = JSON.parse(JSON.stringify(user));
//       const walletAddress = address.Data.address;

//       admin.auth().setCustomUserClaims(user.uid, {
//         walletAddress: walletAddress,
//       });

//       functions.logger.log('walletAddress', walletAddress);
//       functions.logger.log('userData', userData);

//       const addWallet = await admin
//         .firestore()
//         .collection('users')
//         .doc(user.uid)
//         .set({
//           userData,
//           walletAddress,
//         });

//       functions.logger.log('dbcall', addWallet);

//       return addWallet;
//     } catch (error) {
//       functions.logger.log(error);
//     }
//   });

exports.generateWalletOnUserCreation = functions.https.onCall(
  async (data, context) => {
    functions.logger.log('i got called');
    const uid = context.auth.uid;

    const options = {
      method: 'POST',
      url: 'https://www.wolframcloud.com/obj/christianp/MyProjects/FindingSpaces/API/v1/wallet',
      data: {
        network: 'testnet',
      },
      headers: {
        'Content-Type': 'application-json',
      },
    };

    try {
      const results = (await axios(options)).data;
      const walletAddress = results.Data.address;

      await axios({
        method: 'POST',
        url: 'https://www.wolframcloud.com/obj/christianp/MyProjects/FindingSpaces/API/v1/transaction',
        data: {
          network: 'testnet',
          type: 'token',
          amount: 500,
          recipient: walletAddress,
        },
        headers: {
          'Content-Type': 'application-json',
        },
      });

      // functions.logger.log('spacetokens', await spaceTokenResults);

      admin.auth().setCustomUserClaims(uid, {
        walletAddress: walletAddress,
      });

      functions.logger.log('walletAddress', walletAddress);
      return { walletAddress: walletAddress };
    } catch (error) {
      functions.logger.log(error);
      return;
    }
  },
);

exports.processClaim = functions.https.onCall(
  async (data, context) => {
    functions.logger.log('i got called');
    // functions.logger.log(data.propertyData.address);
    const uid = context.auth.uid;
    const walletAddress = data.walletAddress;
    const propertyData = data.propertyData;
    functions.logger.log(walletAddress);
    try {
      const options = {
        method: 'POST',
        url: 'https://www.wolframcloud.com/obj/christianp/MyProjects/FindingSpaces/API/v1/nft',
        data: {
          network: 'testnet',
          action: 'mint',
          owner: walletAddress,
        },
        headers: {
          'Content-Type': 'application-json',
        },
      };

      // const spaceTokenResults = (await axios(options2)).data;
      // functions.logger.log('spacetokens', await spaceTokenResults);

      const nftResults = (await axios(options)).data;
      functions.logger.log('nftfff', await nftResults);

      await admin.firestore().collection('claims').doc(uid).set({
        nft: nftResults.Data.nftData,
        propertyData: propertyData.address,
        id: propertyData.id,
        image: propertyData.image,
        value: propertyData.market_assessments[0],
      });

      return {
        nft: nftResults.Data.nftData,
        propertyData: propertyData.address,
        id: propertyData.id,
        value: propertyData.market_assessments[0],
      };
    } catch (error) {
      // functions.logger.log(error);
      return {
        nft: nftResults.Data.nftData,
        propertyData: propertyData.address,
        id: propertyData.id,
        value: propertyData.market_assessments[0],
      };
    }
  },
);
