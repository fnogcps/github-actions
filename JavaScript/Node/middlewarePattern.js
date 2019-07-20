// Middleware pattern

const stepOne = (ctx, next) => {
  ctx.valueA = 100;
  next();
};

const stepTwo = (ctx, next) => {
  ctx.valueB = 200;
  next();
};

const stepThree = ctx => (ctx.valueC = 300);

const exec = (ctx, ...steps) => {
  const execMidd = i => {
    steps && i < steps.length && steps[i](ctx, () => execMidd(i + 1));
  };
  execMidd(0);
};

const ctx = {};
exec(ctx, stepTwo, stepOne, stepThree);

console.log(ctx);
