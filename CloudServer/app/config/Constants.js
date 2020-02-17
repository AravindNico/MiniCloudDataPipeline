const SMConstants = {};

SMConstants.lastModifiedTimeIST = function getLastModifiedTime() {
  return new Date();
};

SMConstants.lastModifiedTimeIST1 = function getLastModifiedTime() {
  return (lastModifiedTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata"
  }));
};

SMConstants.timeInEPOC = function getTimeInEPOC() {
  return Math.floor(new Date() / 1000);
};

module.exports = SMConstants;