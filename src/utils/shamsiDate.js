const shamsiDate = (miladiDate) => {
    // example = "22/2/1"
    let day = miladiDate.slice(0,2);
    let month = miladiDate.slice(3,5);
    let year = miladiDate.slice(6,8);
    const d = new Date(year, month, day);
    let shamsiDate = new Intl.DateTimeFormat('fa-IR').format(d);

    return shamsiDate;
}

export default shamsiDate;