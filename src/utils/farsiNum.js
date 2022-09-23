const faNumConverter = expression => {

    let faNum = "";
    let faNumbers = ['۰','١','۲','۳','۴','۵','۶','۷','۸','۹'];
    let strEnNum = String(expression);
    
    for(let i=0; i < strEnNum.length; i++){
        if(!isNaN(Number(strEnNum.charAt(i)))){
            faNum = faNum + faNumbers[strEnNum.charAt(i)];
        }else{
            faNum = faNum + strEnNum.charAt(i);
        }
    }

    return faNum;
}

export { faNumConverter };