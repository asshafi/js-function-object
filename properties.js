var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen:25
}
// objectName.propertyName ekti object er property access kore!
// var penCount = shoppingCart.pen;
// console.log(shoppingCart);
// console.log(penCount);
// ----------------------------------------------------
// when you know the sepcific property name, use dot notation to get the property value 
var penCount2 = shoppingCart['pen'];
var proprtyName = 'mouse';
var propertyvalu = shoppingCart[proprtyName];
// console.log(proprtyName, propertyvalu);
var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);

// set properties value 
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 24;
console.log(shoppingCart);
shoppingCart[proprtyName] = 87;
console.log(shoppingCart);