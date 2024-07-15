// Managing the 'lives' for non-authenticated users: a systems that sets a limit of sessions a user without a subscrption can do on the app

export function checkTimeDifference() {
    
    const lastUseTimeSting = localStorage.getItem("appLastUseTime");


    let timeDifferenceMnts; // the time difference between the last time the user used the app and now (in minutes)
    
    if(lastUseTimeSting) {
        const lastUseTime = parseInt(lastUseTimeSting);
        
        timeDifferenceMnts = Math.floor((Date.now() - lastUseTime)/1000/60);
        
        console.log(timeDifferenceMnts)
    } else { timeDifferenceMnts = -1}; // defaul value to indicate that no previous data is found
   
    return timeDifferenceMnts;
}