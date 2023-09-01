export type SearchBarProps = {
  searchFor: 'projects' | 'members';
  updateData: (filteredData: any) => void;
};
