'use strict';

/**
 * @File
 * TODO some description
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const fetchMobilSoegProfile = SocketClient('findMobilSoegProfile');
const isLoggedIn = SocketClient('isMobilSoegUserLoggedIn');
const saveLikeToMobilSoegProfile = SocketClient('saveLikeToMobilSoegProfile');
const deleteLikes = SocketClient('deleteLikesFromMobilSoegProfile');

let ProfileActions = Reflux.createActions([
  'isLoggedIn', // Checks if the user is logged in and returns true/false based on that
  'isLoggedInResponse',
  'fetchMobilSoegProfile',
  'fetchMobilSoegProfileResponse',
  'saveLikeToMobilSoegProfile',
  'likeObject',
  'dislikeObject',
  'likeSaved',
  'dislikeObject',
  'deleteLikes'
]);

ProfileActions.isLoggedIn.listen(isLoggedIn.request);
isLoggedIn.response(ProfileActions.isLoggedInResponse);

ProfileActions.fetchMobilSoegProfile.listen(fetchMobilSoegProfile.request);
fetchMobilSoegProfile.response(ProfileActions.fetchMobilSoegProfileResponse);

ProfileActions.saveLikeToMobilSoegProfile.listen(saveLikeToMobilSoegProfile.request);
saveLikeToMobilSoegProfile.response(ProfileActions.likeSaved);

ProfileActions.deleteLikes.listen(deleteLikes.request);
deleteLikes.response(ProfileActions.fetchMobilSoegProfile);

export default ProfileActions;
