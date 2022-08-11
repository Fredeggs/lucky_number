function snakeToCamel(variable) {
  let splitUnderscore = variable.split("_");
  let camelArray = [splitUnderscore[0]];
  for (let index = 1; index < splitUnderscore.length; index++) {
    camelArray.push(
      splitUnderscore[index][0].toUpperCase() + splitUnderscore[index].slice(1)
    );
  }
  return camelArray.join("");
}
