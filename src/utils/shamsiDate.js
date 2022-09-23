const shamsiDate = (miladiDate) => {
    // example = "22/02/01"

    //  ۲۰۲۲-۰۹-۲۲
    let day = miladiDate.slice(8,10);
    let month = miladiDate.slice(5,7);
    let year = miladiDate.slice(0,4);
    const d = new Date(year, month, day);

    let shamsiDate = new Intl.DateTimeFormat('fa-IR').format(d);

    return shamsiDate;
}

export default shamsiDate;