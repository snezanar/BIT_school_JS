(function(){
    function Genre(name){
        this.name=name;
        this.getData=function(){
            var formated='';
            formated=this.name[0].toUpperCase()+this.name[this.name.length-1].toUpperCase();
            return formated;
            }
        }    
    function Movie(title,genre,length){ 
        this.title=title;
        this.genre=genre;
        this.length=length;
        this.getData=function(){
            return  this.title+","+this.length+"min, "+this.genre.getData();
        }    
    }
    function Program(date){
        this.date=date;
        this.listOfMovies=[];
        this.totalNumOfMovies=0;
        this.addMovie=function(movie){ 
   
                this.listOfMovies.push(movie);
                this.totalNumOfMovies++;            
        }
        this.getData=function(){
            var day=this.date.getUTCDate();
            var month=this.date.getMonth();
            var year=this.date.getFullYear();
            var list='';
            //var duration=0;
            for(var i=0;i<this.listOfMovies.length;i++){
                var element=this.listOfMovies[i];
                list+='\t\t'+element.getData()+'\n';
               // duration+=element.length;
            }
            return  (day+"."+month+"."+year+", program duration "+this.calcDuration()+"min"+"\n"+list);
        }
        this.calcDuration = function(){
            var dur = 0;
            for(var i = 0; i < this.listOfMovies.length; i++){
              var element = this.listOfMovies[i];
              dur += element.length;
            }
            return dur;
        }
    };
    function Festival(name){
        this.name=name;
        this.listOfPrograms=[];
        this.totalNumOfMovies=0;
        this.addProgram=function(program){
            this.listOfPrograms.push(program);
            this.totalNumOfMovies+=program.totalNumOfMovies;
        }
        this.getData=function(){
            var list='';
            for(var i=0;i<this.listOfPrograms.length;i++){
                var element=this.listOfPrograms[i];
                list+=element.getData();
            }

           return this.name+' has '+this.totalNumOfMovies+' movie titles '+'\n'+list;
           
        }
    }
    function createMovie(title,genre,length){
        var genre=new Genre(genre);
        return new Movie(title,genre,length);
    }
    function createProgram(date){
        return new Program(date);
    }

    var movie1=createMovie('Pulp fiction', "action", 130);
    var movie2=createMovie('Kill Bill', "action", 120);
    var movie3=createMovie('Englorius busterds', "action", 100);
    var movie4=createMovie('Die hard 1', "action", 120);
    var movie5=createMovie('Matrix', "sifi", 110);
    var program1=createProgram(new Date(2021,8,31));
    var program2=createProgram(new Date(2021,8,30));
    var festival=new Festival("Palic Film Festival");
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie3);
    program2.addMovie(movie4);
    program2.addMovie(movie5);
    festival.addProgram(program1);
    festival.addProgram(program2);
    console.log(movie1.genre.name);
    console.log(movie5.genre.name);
    console.log(movie1.getData());
    console.log(movie5.getData());
    console.log("----------");
    console.log(program1.getData());
    console.log(program2.getData());
//     console.log("----------");
//     console.log(program1.calcDuration()+" min.");
//     console.log(program2.calcDuration()+" min.");

     console.log("---------");
   console.log(festival.getData());
})();