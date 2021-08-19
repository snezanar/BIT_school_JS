(function () {
    "use strict";

    //Object.freeze();

    var CONTINENT = {
        EUROPA: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU"
    }

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
        this.getFormattedName = function () {
            var formatted = this.name[0];

            for (var i = 1; i < this.name.length; i++) {
                var current = this.name[i]

                switch (current) {
                    case "a":
                    case "e":
                    case "i":
                    case "o":
                    case "u":
                    case "A":
                    case "E":
                    case "I":
                    case "O":
                    case "U":
                        continue;
                }

                formatted += current;
                break;
            }

            return formatted;
        }
    }

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth,

        this.getInfo = function () {
            return this.name + " " + this.surname + ", " + (2021 - this.dateOfBirth.year) + " years";
        }
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;

        this.getBetInfo = function () {
            return "\t\t" + this.country.getFormattedName() + ", " + 
            this.betAmount * this.country.odds + ", " +
            this.person.getInfo();
        }
    }

    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;

        this.fullAddress = function () {
            return this.street + " " + 
            this.number + ", " + 
            this.postalCode + " " + 
            this.city + ", " + 
            this.country.getFormattedName;
        }
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];

        this.getSumOfBets = function() {
            var sumOfBets = 0;

            for(var i = 0; i < this.listOfPlayers.length; i++) {
                sumOfBets += this.listOfPlayers[i].betAmount;
            }

            return sumOfBets;
        }

        this.getInfo = function () {
            return (
            this.address.street + 
            ", " + 
            this.address.postalCode + 
            " " + 
            this.address.city + 
            ", sum of all bets: " + 
            this.getSumOfBets() + 
            " eur"
            );
        }

        this.addPlayer = function (player) {
            this.listOfPlayers[this.listOfPlayers.length] = player;
        }

        this.showPlayerInfo = function() {
            var playerInfo = "";

            for(var i = 0; i < this.listOfPlayers.length; i++) {
                var currPlayer = this.listOfPlayers[i];
                playerInfo += "\n\t" + currPlayer.getBetInfo();
            }

            return playerInfo;
        }

    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];

        this.numOfBets = function() {
            var numOfBets = 0;
            for(var i = 0; i < this.listOfBettingPlaces.length; i++) {
                var currPlace = this.listOfBettingPlaces[i];
                numOfBets += currPlace.listOfPlayers.length;
            }
            return numOfBets;
        };

        this.addBettingPlace = function (place) {
            this.listOfBettingPlaces[this.listOfBettingPlaces.length] = place;
        };

        this.showInfo = function () {
            return this.competition + ", " + 
            this.listOfBettingPlaces.length + " places, " + 
            this.numOfBets() + " bets.\n" + 
            this.showInfoPerPlace();
        };

        this.showInfoPerPlace = function() {
            var info = "";
            for(var i = 0; i < this.listOfBettingPlaces.length; i++) {
                var currPlace = this.listOfBettingPlaces[i];
                info += "\t" + currPlace.getInfo() +
                currPlace.showPlayerInfo() + "\n";
            }
            return info;
        };

        this.getNumberOfBetsByCountry = function(countryNameToCheck) {
            var totalBets = 0;

            for(var i =0; i < this.listOfBettingPlaces.length; i++) {
                var place; // dodaj
            }
        }

    }

    function createPlayer(person, betAmount, country) {
        return new Player(person, betAmount, country);
    }

    function createBettingPlace(address, listOfPlayers) {
        return new BettingPlace(address, listOfPlayers);
    }

    var bettingHouse1 = new BettingHouse("Football World Cup Winner");

    var sr = new Country("Serbia", 1.2, CONTINENT.EUROPA);
    var gr = new Country("Greece", 2, CONTINENT.EUROPA);

    var address1 = new Address(sr, "Belgrade", 11000, "Nemanjina", 23);
    var address2 = new Address(gr, "Athens", 23000, "3 Septembriou", 3);

    var person1 = new Person("Petar", "Petrovic", {day: 2, month: 5, year: 1980});
    var person2 = new Person("Marko", "Markovic", {day: 5, month: 12, year: 1990});
    var person3 = new Person("Bojan", "Bojanic", {day: 23, month: 4, year: 1987});
    var person4 = new Person("Ana", "Ivanovic", {day: 12, month: 7, year: 1992});

    var player1 = createPlayer(person1, 200, sr);
    var player2 = createPlayer(person2, 120, sr);
    var player3 = createPlayer(person3, 70, gr);
    var player4 = createPlayer(person4, 100, gr);

    var place1 = createBettingPlace(address1);
    var place2 = createBettingPlace(address2);
    
    place1.addPlayer(player1);
    place1.addPlayer(player2);
    place2.addPlayer(player3);
    place2.addPlayer(player4);

    bettingHouse1.addBettingPlace(place1);
    bettingHouse1.addBettingPlace(place2);

    //var date = new Date();

    
    console.log(bettingHouse1.showInfo());

    console.log(bettingHouse1.showInfoPerPlace());


})();