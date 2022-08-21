let x = 10;
let y = x;

handle();

function handle() {
  if (y) {
    return x;
  }
}
