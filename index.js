var arr = ['Ramesh','jordan','abhay','Vinod','John','Huston','jenny','Akansha']
console.log('Names -> '+arr+'\n\n');
for(let i = 0; i<=(arr.length-1);i++){
    if(arr[i].charAt(0) === 'j' || arr[i].charAt(0) === 'J'){
        console.log('Goodbye '+arr[i]);
    }
    else{
        console.log('Hello '+arr[i]);
    }
}