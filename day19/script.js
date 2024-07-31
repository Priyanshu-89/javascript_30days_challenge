// Activity 1 : Basic Regular Expression 

// task 1 

const str = "JavaScript is a versatile language. JavaScript helps build web applications. JavaScript is also used for mobile Development"
const regex = /\bJavaScript\b/gi
const result = str.match(regex)
console.log(result)

// task 2 

const str1 = "The year is 2024 and the temperature is 45 deg. My mobile number is 123-456-7890."
const regex1 = /\d+/g
const result1 = str1.match(regex1)
console.log(result1)

// task 3 

const str2 = "Alice and Bob went to New York City. They visited the Statue of Liberty and Central Park."

const regex2 = /\b[A-Z][a-zA-Z]*\b/g
const result2 = str2.match(regex2)
console.log(result2)

// task 4 
const str3 = "The price of the item is $120.99. The price of 2nd items $236"
const regex3 = /\d+/g
const result3 = str3.match(regex3)
console.log(result3)

// task 5 
const phoneNumber="(123) 456-7890"
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/
const result5 = phoneNumber.match(regex5)
console.log(result5)
const [fullMatch, areaCode, centralOfficeCode, lineNumber] = result5;
console.log('Full Match:', fullMatch);
console.log('Area Code:', areaCode);
console.log('Central Office Code:', centralOfficeCode);
console.log('Line Number:', lineNumber);

// task 6 
const email="username@gmail.com"
const regex6=/^(\S+)@(\S+)$/
const result6 = email.match(regex6)
console.log(result6)
const [fullMatch1, username, domain] = result6;
console.log('Full Match:', fullMatch1);
console.log('Username:', username);
console.log('Domain:', domain);
