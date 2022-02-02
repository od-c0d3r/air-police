export const data = [
  { id: 0, name: 'Egypt', airIdx: 2 },
  { id: 1, name: 'Egyptos', airIdx: 2 },
  { id: 2, name: 'Egyptaz', airIdx: 2 },
  { id: 3, name: 'Egyptok', airIdx: 2 },
  { id: 4, name: 'Egyptor', airIdx: 2 },
];

export function getCountry(id) {
  return data.find(
    (country) => country.id === id,
  );
}
