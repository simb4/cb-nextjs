export const eraseFromObject = (target, ...erase) => Object.assign({}, ...Object.keys(target)
    .filter((n) => !erase.includes(n))
    .map((n) => ({ [n]: target[n] })));
