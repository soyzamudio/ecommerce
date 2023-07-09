// remove all special characters from string and sort ascending
// example usage: array.sort(sortVariants)
// example: 50ml, 100ml, 200ml, 500ml, 1000ml
// example: $100, $200, $300, $400, $500, $2,500
export const sortVariants = (a: any, b: any) => {
  const aNum = Number(a.name.replace(/[^0-9]/g, ''));
  const bNum = Number(b.name.replace(/[^0-9]/g, ''));
  return aNum - bNum;
}

// truncate string to n characters and add ellipsis
// example usage: truncate('hello world', 5)
export function truncate(str: string, n = 150){
  return (str.length > n) ? str.slice(0, n-1) + '...' : str;
};

// turn date string into readable format
// example usage: formatDate('2020-01-01T00:00:00.000Z')
export function formatDate(date: string){
  return new Date(date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
}
