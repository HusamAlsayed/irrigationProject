days  = ['saturday','sunday','monday','tuesday','wednesday','thursday','friday']
hours = [];
minutes = []
for(let i = 1;i<=24;++i) {

    hours.push(i.toString());

}

for(let i = 0;i<60;++i) {

    minutes.push(i.toString());

}

module.exports = {days,hours,minutes};