// Reference Url= https://nodejs.org/dist/latest-v18.x/docs/api/os.html

const os = require("os");

// current user
const user = os.userInfo();
console.log(user);

//uptime
console.log(`The system uptime is ${os.uptime()} seconds`);

//os details
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
