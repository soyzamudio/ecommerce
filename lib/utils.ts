// remove all special characters from string and sort ascending
// example usage: array.sort(sortVariants)
// example: 50ml, 100ml, 200ml, 500ml, 1000ml
// example: $100, $200, $300, $400, $500, $2,500
export const sortVariants = (a: any, b: any) => {
  const aNum = Number(a.name.replace(/[^0-9]/g, ''));
  const bNum = Number(b.name.replace(/[^0-9]/g, ''));
  return aNum - bNum;
}