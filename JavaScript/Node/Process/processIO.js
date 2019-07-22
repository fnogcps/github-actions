/*
 * process.argv
 * process.stdout.write
 * process.stdin.on
 */

const arg = process.argv.indexOf('-a') !== -1;

if (arg) {
  process.stdout.write('Name: ');
  process.stdin.on('data', data => {
    const name = data.toString().replace('\n', '');
    process.stdout.write(`\nHello, ${name}!`);
    process.exit();
  });
}
