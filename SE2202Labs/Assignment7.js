//Define all possible routes by creating an array of strings that represent roads
const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

/*
Define a function that will accept the array of roads and return objects representing adjacent locations. The format is "Start"-"End".
The function defines an object that contains properties representing each element in the array, assigning values based on which locations follow the "-" in the name.
Each property has an array of locations. So, for example, "Marketplace" would contain values "Post Office", "Farm", "Shop", and "Town Hall", because
they can be extracted by using the .split function on the original array.
 */
function buildGraph(edges) {
    //Define the main graph object
    let graph = Object.create(null);

    //Define a function that takes two parameters, "from" and "to". "from" represents "start", and "to" represents "end"
    function addEdge(from, to) {
        //If the location property is empty for a given starting point, assign the corresponding "end" value.
        //We need to do this because the .push function only works on defined properties of an object
        if (graph[from] == null) {
            graph[from] = [to];
        }
        //Otherwise add a new element to the "start" location (property) with the .push function
        else {
            graph[from].push(to);
        }
    }
    //Splits the "start" and "end" parts of each element in the array of roads
    //Then, cycle through each element of the array of arrays, and call "addEdge" function
    //We call addEdge twice because each road works both ways
    for (let [from, to] of edges.map(r => r.split("-"))) {
        //Call addEdge function from "start" to "end"
        addEdge(from, to);
        //Call addEdge function from "end" to "start"
        addEdge(to, from);
    }
    //Returns the graph object
    return graph;
}

//Create a new binding roadGraph, the graph which will be used to define possible routes
const roadGraph = buildGraph(roads);
console.log(roadGraph);

//Define a new class called "VillageState" which will have everything needed for defining a problem that the robot will solve
class VillageState {
    //Create a constructor that assigns a current location and parcels location
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    //Define a function that creates new states to represent the robots movement
    move(destination) {
        //First, check if the given place (property in the roadGraph object) does not contain a given destination
        //If it actually doesn't, simply return the original location, because the move is invalid
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        }
        //Otherwise, create a new VillageState object that updates the current location and parcels
        else {
            //Goes through parcels and updates using the .map and .filter functions
            let parcels = this.parcels.map(p => {
                if (p.place !== this.place) return p; //If the parcel place doesn't equal the current place, don't change anything
                return {place: destination, address: p.address}; //Return parcel object with place and address
            }).filter(p => p.place !== p.address); //Filter out the parcels that have been delivered
            return new VillageState(destination, parcels); //Return a new VillageState objected with the most updated state
        }
    }
}

//Create a new binding with a defined VillageState represented by a current place and undelivered parcels
let first = new VillageState(
    "Post Office", //This is the starting place
    [{place: "Post Office", address: "Alice's House"}] //This is the set of parcels
);
//Create a new binding defined by a move to "Alice's House" and therefore a new VillageState
let next = first.move("Alice's House");

//Prints where we currently are
console.log(next.place); //Alice's House
//Prints the current set of undelivered parcels (now empty because we delivered them)
console.log(next.parcels); //[]
//Prints the initial place
console.log(first.place); //Post Office

//Defines a function that simulates the pickup and delivery system given a VillageState and robot type
function runRobot(state, robot, memory) {
    //Loops through steps (turns) that robot takes and prints action
    for (let turn = 0;; turn++) {
        //If the the set of parcels is empty, print the number of turns that the robot took, and break the loop
        if (state.parcels.length === 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        //Create a binding defined by a robot function
        let action = robot(state, memory);
        //Assigns new state based on the move
        state = state.move(action.direction);
        //Updates the memory based on the action
        memory = action.memory;
        //Prints where the robot moved to
        console.log(`Moved to ${action.direction}`);
    }
}

//Method of random pickup and delivery. This picks a random index of a given array
function randomPick(array) {
    //Create a binding that gets a random number that will represent an index of an array
    let choice = Math.floor(Math.random() * array.length);
    //Returns the element at the chosen random index
    return array[choice];
}

//Defines a randomRobot function that randomly moves around the graph until all parcels are delivered
function randomRobot(state) {
    //Chooses a random direction based on the randomPick function that was previously defined
    return {direction: randomPick(roadGraph[state.place])};
}

//Define a function that randomly determines the VillageState. There will be 5 parcels by default, and each parcel will get a random address and place
VillageState.random = function(parcelCount = 5) {
    //Initialize array of parcels
    let parcels = [];
    //Loops through number of arrays and defines properties of each
    for (let i = 0; i < parcelCount; i++) {
        //Defines random address
        let address = randomPick(Object.keys(roadGraph));

        //Defines random place, and makes sure that the place is not the same as the address by continuing the do-while loop otherwise
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place === address);
        //Adds the new parcel with a given place and address to the list
        parcels.push({place, address});
    }
    //Returns a new VillageState based on the random parcels
    return new VillageState("Post Office", parcels);
};

//Test out the randomRobot with a random VillageState
runRobot(VillageState.random(), randomRobot);

//Defines a route that ensures the robot will reach every location along the way
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

//
function routeRobot(state, memory) {
    //If the memory given is empty, assign memory to the mailRoute defined earlier
    if (memory.length === 0) {
        memory = mailRoute;
    }
    //Returns an updated direction and memory
    //The direction is the first element in the mailRoute array, and the mailRoute array's first element is then removed with the .slice function
    return {direction: memory[0], memory: memory.slice(1)};
}

//Test out the the routeRobot with a random VillageState
runRobot(VillageState.random(), routeRobot, []);

//Declare a function to find an efficient route for a robot
//This cycles through different route options of increasing size and finds the shortest one that works
function findRoute(graph, from, to) {
    //Create a binding that holds a list of options given by a start location and route that takes us to a current location
    let work = [{at: from, route: []}];
    //Loops through the work list and adds to the list depending on the success of route options
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        //Loops through places of the route graph and adds to the route depending on success
        for (let place of graph[at]) {
            //If the place is the same as destination, which means the route works, return a concatenation of that place with the route
            if (place === to) return route.concat(place);
            //Otherwise, if the place was not yet visited, add a new item to the work list
            if (!work.some(w => w.at === place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

//Define a goalOrientedRobot that delivers parcels based on the previously defined findRoute function
function goalOrientedRobot({place, parcels}, route) {
    //If the route length is 0, execute, otherwise return the new direction and memory
    if (route.length === 0) {
        //If the parcel's place is not equal to the current place, findRoute to the parcel's place
        let parcel = parcels[0];
        if (parcel.place !== place) {
            route = findRoute(roadGraph, place, parcel.place);
        }
        //Otherwise, findRoute to the parcel's address
        else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    //The direction is the first element in the route array, and the route array's first element is then removed with the .slice function
    return {direction: route[0], memory: route.slice(1)};
}

//Tests the goalOrientedRobot with a random VillageState
runRobot(VillageState.random(), goalOrientedRobot, []);

//Exercise 1: Measuring a robot
//Define a slightly modified runRobot function that doesn't print anything, and instead returns the number of turns taken
function runRobotVar(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length === 0) {
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

//Define a function to compare the average moves of two different robots
function compareRobots(robot1, memory1, robot2, memory2) {
    //Define two arrays
    let array1 = [];
    let array2 = [];

    //Loops 100 times, assigning a new value to arrays each time, based on number of moves required
    for (let i = 0; i < 100; i++) {
        //Gets a new random VillageState each time
        let state = VillageState.random();
        //Assigns the number of moves completed by each robot in the given VillageState a spot in each array
        array1[i] = runRobotVar(state, robot1, memory1);
        array2[i] = runRobotVar(state, robot2, memory2);
    }
    //Computes the average for each robot by finding the sum of values in each array and dividing by the length of the array
    let avg1 = array1.reduce((a, b) => (a+b))/array1.length;
    let avg2 = array2.reduce((a, b) => (a+b))/array2.length;

    //Prints out the average number of moves completed by each robot
    console.log("The average number of steps for robot1 is: " + avg1);
    console.log("The average number of steps for robot2 is: " + avg2);
}

//Tests out the robot comparison function with the randomRobot vs. the goalOrientedRobot
compareRobots(randomRobot, [], goalOrientedRobot, []);

//Exercise 2: Robot efficiency
function efficientRobot({place, parcels}, route) {
    //If the route length is 0, execute, otherwise return the new direction and memory
    let pickupRoutes = [];
    let dropRoutes = [];
    if (route.length === 0) {
        for (let i = 0; i < parcels.length; i++) {
            pickupRoutes[i] = findRoute(roadGraph, place, parcels[i].place);
            dropRoutes[i] = findRoute(roadGraph, place, parcels[i].address);
        }
        //If the parcel's place is not equal to the current place, findRoute to the parcel's place
        let parcel = parcels[0];
        if (parcel.place !== place) {
            route = findRoute(roadGraph, place, parcel.place);
        }
        //Otherwise, findRoute to the parcel's address
        else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    //The direction is the first element in the route array, and the route array's first element is then removed with the .slice function
    return {direction: route[0], memory: route.slice(1)};
}

runRobot(VillageState.random(), efficientRobot, []);


//Exercise 3: Persistent group