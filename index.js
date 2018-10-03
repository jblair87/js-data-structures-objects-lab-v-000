const driver = {};
updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}
destructivelyUpdateDriverWithKeyAndValue(){}
deleteFromDriverByKey(){}
destructivelyDeleteFromDriverByKey(){}