import request from 'supertest';
import '../../src/index';
import server from '../../src/server';

describe('/exemplos/create', function () {
  // run migrations and others configs here

  it('...valida criação de um exemplo', (done) => {
    request(server.app)
      .post('/api/v1/exemplos')
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .send({
        descricao: 'exemplo...',
      })
      .expect(200, done);
  });

  it('...valida obrigatoriedade do atributo >>>descricao<<<', (done) => {
    request(server.app)
      .post('/api/v1/exemplos')
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .expect(400, done);
  });

  it('...valida obrigatoriedade do usuário autenticado', (done) => {
    request(server.app).post('/api/v1/exemplos').expect(401, done);
  });
});
