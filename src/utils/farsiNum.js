const faNumConverter = number => {
    let faNum = "";
    let faNumbers = ['۰','١','۲','۳','۴','۵','۶','۷','۸','۹'];
    let strEnNum = String(number);
    
    for(let i=0; i < strEnNum.length; i++){
        faNum = faNum + faNumbers[strEnNum.charAt(i)];
    }

    return faNum;
}

export { faNumConverter };