const rusToEng = {
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'e',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'y',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'h',
  'ц': 'ts',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'sh',
  'ъ': '',
  'ы': 'y',
  'ь': '',
  'э': 'e',
  'ю': 'yu',
  'я': 'ya',

  '&': 'and',
  '\'': '',
  '(': '',
  ')': '',
  '-': '',
  ':': '',
  '.': '',
  ',': '',
}

export const toLatin = (word) => word.toLowerCase().split('').map(ch => (rusToEng[ch] === '' ? '' : rusToEng[ch]) || ch).join('');

export const getLatinURI = (id, words) => {
  var suffix = words.split(' ').map(w => toLatin(w)).join('-');
  var uri = `/fitness/${id}-${suffix}`;
  return uri;
}