// 1.	Create an object that represents your favourite coffee. 
// Please include coffee name, strength, flavour, milk, sugar, … everything you like!
var coffee={
    name:'Nesscaffe',
    strength: 4,
    // strength:{
    //     extraLight:true,
    //     light:false,
    //     medium:false,
    //     strong:false,
    //     veryStrong:false
    // },
    flavor: 'vanila',
    milk: true,
    sugar: 2,
    getCoffeStrenght:function(){
        var strength='';
        switch(coffee.strength){
            case 1:
                strength='extra light';
                break;
            case 2:
                strength='light';
                break;
                    case 3:
                        strength='medium';
                        break;
                        case 4:
                            strength='strong';
                            break;
                            case 5:
                                strength='extra strong';
                                break;
                                default:
                                    strength='medium'
        }
        return strength;
    },
    getMilkInfo:function(){
        return coffee.milk ? 'with milk':'wo milk';
    }

}
console.log(coffee);
console.log('I like to drink '+coffee.name+' coffee.');
console.log('I like to drink '+coffee.getCoffeStrenght()+" , "+coffee.name+' coffee ' + coffee.getMilkInfo()+'.');

// 2.	Create an object that represents your favourite movie.
//  Please include title, actors, director, genre, popularity. 

var movie={
    title:'Inception',
    actors:['Leonardo','Michael', 'Johana'], // ako nam treba vise info o glumcu==> objekat
    director: {
        name:'Copola',
        age:55,
        //...
    },
    genre: 'action',
    popularity: 4.5
};
console.log(movie);

// 3.	Write a function that creates an object that represents a project. Each project is described by:
//  description,  programming language, git repository, boolean status that says if the project is in 
//  development or not. Add a method that prints out the project's repository,  a method that checks 
//  if the project is written in JavaScript as well as a method that checks if the project is in 
//  development or not.


(function (){
    var project={
        decription:'this project....',
        programingLanguage:'JS',
        gitRepo:'https://githib.com',
        status:true,
    };
    function createProject(){
        return {
            decription:'this project....',
            programingLanguage:'JS',
            gitRepo:'https://githib.com',
            status:true,
        }
    };
    var project1=createProject(); // mozemo preko argumenata
    var project2=createProject();
    console.log('//-----------------------------------------------');
    console.log(project1);
    console.log('//-----------------------------------------------');
    console.log(project2);
}) ();
//-----------------------------------------------
(function (){

    function createProject(description,programingLanguage,gitRepo,status){
        return {
            decription:description,
            programingLanguage:programingLanguage,
            gitRepo:gitRepo,
            devStatus:status,
        };
    }
    var project1=createProject('This is....', 'JS','www.git.com', true); // sa argumentima
    var project2=createProject('New project', 'Java', '', false);
    console.log('//-----------------------------------------------');
    console.log(project1);
    console.log('//-----------------------------------------------');
    console.log(project2);
}) ();
//-----------------------------------------------
(function (){

    function createProject(description,programingLanguage,gitRepo,status){
        return {
            decription:description,
            programingLanguage:programingLanguage,
            gitRepo:gitRepo,
            devStatus:status,
        };
    }
    var project1=createProject('This is....', 'JS','www.git.com', true); // sa argumentima
    var project2=createProject('New project', 'Java', '', false);
    console.log('//-----------------------------------------------');
    console.log(project1);
    console.log('//-----------------------------------------------');
    console.log(project2);
}) ();