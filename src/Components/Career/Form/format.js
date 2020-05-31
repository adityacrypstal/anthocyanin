export const format = (data) =>{
    let obj1 = {};
    obj1['company_name'] = data.company_name1;
    obj1['company_period'] = data.company_period1;
    obj1['comapny_designation'] = data.company_designation1;
    obj1['company_keyresponsibility'] = data.company_keyresponsibility1;
    let obj2 = {};
    obj2['company_name'] = data.company_name2;
    obj2['company_period'] = data.company_period2;
    obj2['comapny_designation'] = data.company_designation2;
    obj2['company_keyresponsibility'] = data.company_keyresponsibility2;
    let obj3 = {};
    obj3['company_name'] = data.company_name3;
    obj3['company_period'] = data.company_period3;
    obj3['comapny_designation'] = data.company_designation3;
    obj3['company_keyresponsibility'] = data.company_keyresponsibility3;
    data.employment=[];
    data.employment.push(obj1);
    data.employment.push(obj2);
    data.employment.push(obj3);
    data['10_mark'] =  data.s10_mark;
    data['10_percent'] = data.s10_percent;
    data['10_clg']  =  data.s10_clg;
    data['10_passingout'] =   data.s10_passingout;
    data['12_mark']  = data.s12_mark;
    data['12_percent'] =  data.s12_percent;
    data['12_clg']  =  data.s12_clg;
    data['12_passingout']  =  data.s12_passingout;
    return data
}
