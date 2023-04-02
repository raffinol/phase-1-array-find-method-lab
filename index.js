function superbowlWin(record){
    let winningYear;
    if(winningYear = record.find(property => property.result === "W")){
        return winningYear.year;
    }else {
        return undefined
    }
    }
