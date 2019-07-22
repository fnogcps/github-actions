// Dynamic scoping

var a = 10;

{
  console.log(a);
}

{
  {
    a += 50;
  }

  console.log(a);
}
