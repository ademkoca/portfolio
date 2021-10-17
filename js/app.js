var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    let weatherapp_born=new Date('2021/09/26')
    let today=new Date('2021/12/31');
    let todayMonth = ((today.getMonth())+1)%12;
    let todayDay = ((today.getDate())+1)%30;    
    let todayYear = today.getFullYear()
    console.log(todayMonth+"/"+todayDay+"/"+todayYear);
    console.log(date_diff_indays(weatherapp_born, today));
    // console.log(date_diff_indays('12/02/2014', '11/04/2014'));