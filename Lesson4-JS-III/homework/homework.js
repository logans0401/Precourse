// Do not change any of the function names



  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
function makeCat(name, age) {

  const myCat = {
    name: name,
    age: age,
    meow: function() {
      return 'Meow!';
    },
  };
  return myCat;
}






  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
function addProperty(object, property) {
  object[property] = null;
  return object;
} 




  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
function invokeMethod(object, method) {
  object[method]();
}






  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
function multiplyMysteryNumberByFive(mysteryNumberObject) {
  let num = mysteryNumberObject.mysteryNumber * 5;
  return num;
}






  // remove the property from the object
  // return the object
function deleteProperty(object, property) {
  delete object[property];
  return object;
}


  // create a new object with properties matching the arguments passed in.
  // return the new object
function newUser(name, email, password) {
  let newObject = {
    name: name,
    email: email,
    password: password,
  };
  return newObject;
} 




  // return true if the user has a value for the property 'email'
  // otherwise return false
function hasEmail(user) {
  return !user['email'] == '';
}




  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
function hasProperty(object, property) {
  if (!object[property] == '') {
    return true;
  }
  return false;
}







  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
function verifyPassword(user, password) {
  if (password === user.password) {
    return true;
  }
  return false;
}





  // replace the existing password on the user object with the value of newPassword
  // return the object
  // Object.keys(obj).length
function updatePassword(user, newPassword) {
  delete user.password;
  user.password = newPassword;
  return user;
}





  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
}




  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
function setUsersToPremium(users) {  
  for (let i = 0 ; i < users.length ; i++) {
    users[i].isPremium = true;
  }
  return users;
}







  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
function sumUserPostLikes(user) {
  var sum = 0;
  for (let i = 0 ; i < user.posts.length; i++) {
    sum += user.posts[i].likes;
  }
  return sum;
}






  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  function addCalculateDiscountPriceMethod(storeItem) {
 storeItem.calculateDiscountPrice = function(){
   let discount = storeItem.price * storeItem.discountPercentage;
   let discountedPrice = storeItem.price - discount;
   return discountedPrice;
 };
 return storeItem;
}







// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
