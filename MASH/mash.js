let livingSit = ["Mansion", "Apartment", "Shack", "House"];

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
    const decimal = Math.random();
    const times10 = decimal * 100;
    const final = Math.floor(times10);
        if(final == 0){
            return 1
        }
        else{
            console.log(process.argv[2]);
        }
    return final
}
function mash(){
    return `You will live in a ${getHome()} and have ${getkids()} kids`;
    
}


console.log(mash());

