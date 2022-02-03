export const data = [
  { id: 0, name: 'Egypt', airIdx: 2 },
  { id: 1, name: 'Egyptos', airIdx: 2 },
  { id: 2, name: 'Vgyptaz', airIdx: 2 },
  { id: 3, name: 'Xgyptok', airIdx: 2 },
  { id: 4, name: 'Jgyptor', airIdx: 2 },
];

export function getCountry(id) {
  return data.find(
    (country) => country.id === id,
  );
}
