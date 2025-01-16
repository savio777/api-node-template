import '../../src/index';

import request from 'supertest';
import server from '../../src/server';

describe('/exemplos/update', function () {
  // run migrations and others configs here

  it('...valida atualização de um exemplo', async () => {
    const resCreateExemplo = await request(server.app)
      .post('/api/v1/exemplos')
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .send({
        descricao: 'exemplo...',
      })
      .expect(200);

    await request(server.app)
      .put(`/api/v1/exemplos/${resCreateExemplo.body.id}`)
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .send({
        descricao: 'exemplo atualizado',
      })
      .expect(200);
  });

  it('...valida exemplo não encontrado', (done) => {
    request(server.app)
      .put('/api/v1/exemplos/id_exemplo')
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .send({
        descricao: 'exemplo atualizado',
      })
      .expect(
        400,
        {
          status: 400,
          message: 'Example não encontrado',
        },
        done,
      );
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  /*
  it('...valida obrigatoriedade do usuário autenticado', (done) => {
    request(server.app).put('/api/v1/exemplos/id_exemplo').expect(401, done);
  });
  */
});
