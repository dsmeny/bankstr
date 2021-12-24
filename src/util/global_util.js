export const modiPathName = (pathname) => {
  return pathname.slice(1).replace(/-/, " ");
};

export const statefullPathName = (pathname) => {
  return pathname.match(/\w+\s/g)[0].trim().toLowerCase();
};
