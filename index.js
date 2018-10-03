const driver = {};


function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
driver[key] = value;
return driver;
}
function deleteFromDriverByKey(driver, key){
  const newObj = Object.assign({}, driver);
 
}

function destructivelyDeleteFromDriverByKey(driver, key){
  
}