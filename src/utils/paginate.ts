interface PaginationFunction {
  <T>(items: T[], pageNumber: number, pageSize: number): T[];
}

export const paginate: PaginationFunction = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
