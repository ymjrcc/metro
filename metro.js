'use strict';

//默认获取今天的日期填入输入框
const initInputs = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    document.getElementById('yearInput').value = year;
    document.getElementById('monthInput').value = month;
    document.getElementById('dateInput').value = date;
}
initInputs();

//计算参数传入的日期距离输入框显示的日期是多少天
const renderDate = dateStr => {
    let date2 = new Date(dateStr);
    date2 = date2.getTime();

    const yearVal = document.getElementById('yearInput').value;
    let monthVal = document.getElementById('monthInput').value;
    if (monthVal < 10) { monthVal = "0" + monthVal; }
    let dateVal = document.getElementById('dateInput').value;
    if (dateVal < 10) { dateVal = "0" + dateVal; }

    let date1 = new Date(`${yearVal}-${monthVal}-${dateVal}`);
    date1 = date1.getTime();
    const days = parseInt((date1 - date2) / 60 / 60 / 24 / 1000);
    return days;
}

//将输入框日期转化为日期字符串
const renderDateStr = () => {
    const month = +document.getElementById('monthInput').value - 1;
    const arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = document.getElementById('dateInput').value;
    return `${arr[month]}.${date}`;
}

let content = '';

const renderContent = () => {
    //拼接字符串
    //参数日期是开通日的前一天
    //参数日期表示开通第 0 天
    content = `
    @杭州地铁官方 
    一${renderDate('2012-11-23')}天
    二${renderDate('2014-11-23')}天
    三${renderDate('2022-02-20')}天
    四${renderDate('2015-02-01')}天
    五${renderDate('2019-06-23')}天
    六${renderDate('2020-12-29')}天
    七${renderDate('2020-12-29')}天
    八${renderDate('2021-06-27')}天
    九${renderDate('2021-07-09')}天
    十${renderDate('2022-02-20')}天
    十六${renderDate('2020-04-22')}天
    十九${renderDate('2022-09-21')}天

    @绍兴京越地铁官方
    一${renderDate('2021-06-27')}天
    二${renderDate('2023-07-25')}天

    @海宁市轨道交通
    ${renderDate('2021-06-27')}天

    @宁波轨道交通
    一${renderDate('2014-05-29')}天
    二${renderDate('2015-09-25')}天
    三${renderDate('2019-06-29')}天
    四${renderDate('2020-12-22')}天
    五${renderDate('2021-12-27')}天

    @温州铁投
    S一${renderDate('2019-01-21')}天
    S二${renderDate('2023-08-25')}天

    @金华轨道交通
    金义线${renderDate('2022-08-29')}天
    义东线${renderDate('2022-12-27')}天

    @台州轨道交通
    S一${renderDate('2022-12-27')}天

    @南京地铁
    一${renderDate('2005-09-02')}天
    二${renderDate('2010-05-27')}天
    三${renderDate('2015-03-31')}天
    四${renderDate('2017-01-17')}天
    五${renderDate('2024-03-30')}天
    七${renderDate('2022-12-27')}天
    十${renderDate('2014-06-30')}天
    S一${renderDate('2014-06-30')}天
    S三${renderDate('2017-12-05')}天
    S六${renderDate('2021-12-27')}天
    S七${renderDate('2018-05-25')}天
    S八${renderDate('2014-07-31')}天
    S九${renderDate('2017-12-29')}天

    @苏州轨道交通szrailtransit
    一${renderDate('2012-04-27')}天
    二${renderDate('2013-12-27')}天
    三${renderDate('2019-12-24')}天
    四${renderDate('2017-04-14')}天
    五${renderDate('2021-06-28')}天
    六${renderDate('2024-06-28')}天
    八${renderDate('2024-09-09')}天
    十一${renderDate('2023-06-23')}天

    @无锡地铁
    一${renderDate('2014-06-30')}天
    二${renderDate('2014-12-27')}天
    三${renderDate('2020-10-27')}天
    四${renderDate('2021-12-16')}天
    S一${renderDate('2024-01-30')}天

    @常州地铁官微
    一${renderDate('2019-09-20')}天
    二${renderDate('2021-06-27')}天
    
    @徐州地铁
    一${renderDate('2019-09-27')}天
    二${renderDate('2020-11-27')}天
    三${renderDate('2021-06-27')}天

    @南通地铁
    一${renderDate('2022-11-09')}天
    二${renderDate('2023-12-26')}天

    ${renderDateStr()}`;
    //插入 DOM
    document.getElementById('content').innerText = content;
}

renderContent();

document.getElementById('btn').addEventListener('click', () => {
    const oInput = document.createElement('input');
    oInput.value = content;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    alert('复制成功！');
})
