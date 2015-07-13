//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here

var me = {
    name: "Robert",
    age: '58'
}

alert(me.name + " is " + me.age);


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here

var favoriteThings = {
    band: 'Beatles',
    food: 'Tacos',
    person: 'Michelle',
    book: 'Grapes of Wrath',
    movie: 'Jurrasic Park',
    holiday: '4th Of July'

}


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
  favoriteThings.car = "F150";
  favoriteThings.brand = "Ford";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";


//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  //Code here

var backPack = {

}

var item = 'firstPocket';
backPack[item] = 'chapstick';
backPack.color = 'yellow';

//After you do the above, alert your entire backPack object.

  //Code here
// the below alert works in a browser to show the content of the backpack object, but will use console.log()
//alert (JSON.stringify(backPack));

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here
console.log(backPack);



//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here

var me = {
    name: 'Robert',
    age: '58',
    height: "6\' 3\"",
    gender: 'male',
    married: 'yes',
    eyeColor: 'brown',
    hairColor: 'black'
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here

function objToString (obj) {
    var str = '*';
    for (var p in obj) {
        if (obj.hasOwnProperty(p) && p !== "hairColor") {
            str += obj[p] + ' ' + ' --> ';

        } else if (obj.hasOwnProperty(p) && p === "hairColor") {
            str += obj[p];
        }
    }
    return str;
}

var result = objToString(me);

console.log(result);



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here

var album = {
    something: "3:04",
    chains: "2:08",
    blackbird: "4:11",
    getback: "4:19",
    birthday: "3:48"

};



//Now, loop through your album object alerting every song title individually.

  //Code Here
for (var key in album) {
    alert(key);

}





//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here

 var states = {
      california: 38041430,
      texas: 26059203,
      florida: 193,
      utah: 2855287,
      montana: 1001

 };

var controlVal = 30000;

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here

var controlVal = 30000;

for (var key in states)
{
    if (states[key] > controlVal)
    {
        alert(key + " is greater than " + controlVal);
    }

}


//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
};

/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here

alert("object \'user\' length before is " + Object.keys(user).length);

for (var key in user) {
    if (user[key]) {
        continue;
    } else {
        delete user[key];0
    }

}
alert("object \'user\' length after is " + Object.keys(user).length);

alert(JSON.stringify(user));



//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here

user.name = "Robert Perez";
user.pwHash = "novell";
user.username = "bperez";

alert(JSON.stringify(user));


//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here

user.name = "Tyler S. McGinnis";
user.email = "tyler.mcginnis@devmounta.in";


//Now call the sayName method that's on the user object which will alert the users email

  //Code Here

user.sayName();


//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here

var methodCollection = {

}


/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here

 methodCollection.alertHello = function() {
     alert("hello");
 };

 methodCollection.logHello = function() {
     console.log("hello");
 };


//Now call your alertHello and logHello methods.

  //Code Here

methodCollection.alertHello();
methodCollection.logHello();

//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with
// all of the information that you passed in.

  //Code Here

function MakePerson(pName, pBirthday, pSSN) {
    var newObj =  {};
    newObj.name = pName;
    newObj.birthday =  pBirthday;
    newObj.ssn = pSSN;
    return newObj;
}

var result = MakePerson("Robert", "4-17", "111-11-1111");
alert(JSON.stringify(result));



//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that
// object so that whenever you invoke MakeCard, you get a brand new credit card.

  //Code Here

function MakeCard(pName, ccVendor, expire) {
    var sp = ' ';
    var cCard = {};

    var ccNum1 = getRandomInt(1000, 9999);
    var ccNum2 = getRandomInt(1000, 9999);
    var ccNum3 = getRandomInt(1000, 9999);
    var ccNum4 = getRandomInt(1000, 9999);
    var ccNum = ccNum1 + sp + ccNum2 + sp + ccNum3 + sp + ccNum4;

    var secCode = getRandomInt(200, 999);

    cCard.cardvendor = ccVendor;
    cCard.name = pName;
    cCard.cardnumber = ccNum;
    cCard.cardexpire = expire;
    cCard.securitycode = secCode;

    return cCard;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var result = MakeCard("Robert J. Perez", "Visa", "12-12-2020");
alert(JSON.stringify(result));
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

  //Code Here

function bindCard(personObj, ccObj) {
    var newObj = {};

    for (var key in personObj) {
        newObj[key] = personObj[key];
    }

    for (var key in ccObj) {
        newObj[key] = ccObj[key];
    }

    return newObj;

}
  var finalResult = bindCard(MakePerson("Robert", "4-17", "111-11-1111"), MakeCard("Robert J. Perez", "Visa", "12-12-2020"));
  alert(JSON.stringify(finalResult));