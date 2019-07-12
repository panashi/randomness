let livingSit = ["Mansion", "Apartment", "Shack", "House"];
prob = 2
//Gives arandom value of an index in LivingSit
function rand(){
    const decimal = Math.random();
    const times10 = decimal * livingSit.length;
    const final = Math.floor(times10)
    return final
}

//give a random element in LivingSit
function getHome(){
    livingSit.push(process.argv[2]);
    let wht =  livingSit[rand()]; // call rand() to get the index to choose
    return wht; //send the element to get read
}

function getkids(){
    oat = Math.floor(Math.random() * 1);
    if(oat == 0){
        return Math.floor(Math.random() * 100);
    } else {
        return process.argv[2]
    }
}

function mash(){
    return `You will live in a ${getHome()} and have ${getkids()} kids`;
    
}


console.log(mash());

