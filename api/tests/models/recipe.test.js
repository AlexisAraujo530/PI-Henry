const { Recipe, conn } = require('../../src/db.js');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se puede conectar a la base de datos:', err);
    }));
  describe('Validadores', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('debería arrojar un error si el nombre es null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('Requiere un nombre válido')))
          .catch(() => done());
      });
      it('debería funcionar cuando es un nombre válido', () => {
        Recipe.create({ name: 'Milanesa a la napolitana' });
      });
    });
  });
});
