function isNode(){
  // http://stackoverflow.com/questions/4224606/how-to-check-whether-a-script-is-running-under-node-js
  return (typeof process !== 'undefined') && (process.release) && (process.release.name === 'node');
};

export const width = () => {
    if (isNode()) {
      return 600;
    }
    var d = document.documentElement;
    var width = window.innerWidth || d.clientWidth;
    return width;
}

export const isMobile = () => width() <= 600;

export const isDesktop = () => width() > 600;
