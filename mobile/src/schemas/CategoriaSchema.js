export default class CategoriaSchema {
  static schema = {
    name: 'Categoria',
    primaryKey: '_id',
    properties: {
      _id: { type: 'string', indexed: true },
      nome: { type: 'string', optional: false },
      alias: { type: 'string', optional: false },
      icon: { type: 'string', default: '' },
      active: { type: 'bool', optional: false, default: true },
    },
  };
}