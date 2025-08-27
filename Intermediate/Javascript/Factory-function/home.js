function createPlayer (name, level) {
  const { getReputation, giveReputation } = createUser(name);//     Fun fact about JS -> u can type the properties that is similar to the one in the object without order 
                                                            // But it has to be the same -> otherwise it wont work -> getRepu will not work

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel }; 
}

const hoang = createPlayer("hoang", 0)
console.log(hoang.giveReputation())
console.log(hoang.getReputation())
console.log(hoang.discordName)


function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
// logs { discordName: "@josh", reputation: 2 }
