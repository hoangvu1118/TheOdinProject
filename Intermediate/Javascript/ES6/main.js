// import and export

// Two type -> default && named

// named -> can export and import multiple things
// one.js
export const greeting = "Hello, Odinite!";
export const farewell = "Bye bye, Odinite!";
// one.js
const greeting = "Hello, Odinite!";
const farewell = "Bye bye, Odinite!";
export { greeting, farewell };


// DEFAULT export
// one.js
export default "Hello, Odinite!";
// or
// const greeting = "Hello, Odinite!";
// export default greeting;
// HOWEVER, DEFAULT CAN ONLY
// export a single thing from a module
