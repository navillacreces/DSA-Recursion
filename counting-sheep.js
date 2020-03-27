


let x = ['x','y','z','a','b','c'];


let countThem = function(sheep){


    if (sheep.length === 1){
        console.log(sheep.length, ': another sheep over the fence');
        console.log('all sheep over the fence');
        return sheep[0];
    }

    console.log(sheep.length, ': another sheep over the fence');

    return countThem(sheep.slice(1));

}

countThem(x);


