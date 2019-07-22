// node-schedule, setTimeout

const schedule = require('node-schedule');

const task1 = schedule.scheduleJob('*/5 * * * * 1', function() {
  console.log('Executing task #1...', new Date().getSeconds());
});

setTimeout(() => {
  console.log('Stopping task #1...');
  task1.cancel();
}, 10000);

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = new Date().getHours();
rule.second = 10;

const task2 = schedule.scheduleJob(rule, function() {
  console.log('Executing task #2...', new Date().getSeconds());
});

setTimeout(() => {
  console.log('Stopping task #2...');
  task2.cancel();
}, 10000);
