const driver = {};

updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
driver[key] = value;
return driver;
}
deleteFromDriverByKey(){
  
}

destructivelyDeleteFromDriverByKey(driver, key){
  
}