export function param2Obj(url) {
  const searchParams = url.split('?')[1];
  if (!searchParams) {
    return {}
  }
  const search = decodeURIComponent(url.split('?')[1].replace(/\+/g, ' '));
  if (!search) {
    return {}
  }

  const obj = {};
  const searchArr = search.split('&');
  searchArr.forEach(i => {
    const valIndex = i.indexOf('=');
    if (valIndex !== -1) {
      const name = i.substring(0, valIndex);
      const val = i.substring(valIndex + 1, i.length);
      obj[name] = val;
    }
  })
  return obj;
}