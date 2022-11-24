const request = require('supertest');
const app = require('../../src/app.js');

// describe es para decirle que voi aplicar varios test
describe('GET /recipes', () => {
  it('deberia obtener 200', () =>
    request(app)
      .get('/recipes') // aqui le paso la ruta que quiero testear
      .set('Accept', 'application/json') // le digo que quiero que me devuelva un json
      .expect(200) // espero que me devuelva un 200
      .expect('Content-Type', /json/)); // espero que me devuelva un json
});

describe('GET /recipes/:id', () => {
  it('deberia obtener 200', () =>
    request(app)
      .get('/recipes/1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/));
}
);







