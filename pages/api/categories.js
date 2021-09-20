const list_categories = [
  { _id: 1, name: 'Driks' },
  { _id: 2, name: 'Food' },
];


export default (req, res) => {
  res.status(200).json(list_categories);
};
