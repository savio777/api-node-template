import request from 'supertest';
import '../../src/index';

import server from '../../src/server';

describe('/exemplos/remove', function () {
  // run migrations and others configs here

  it('...valida a deleção de um exemplo', async () => {
    const resCreateExemplo = await request(server.app)
      .post('/api/v1/exemplos')
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .send({
        descricao: 'exemplo...',
      })
      .expect(200);

    await request(server.app)
      .delete(`/api/v1/exemplos/${resCreateExemplo.body.id}`)
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .expect(200);
  });

  it('...valida exemplo não encontrado', (done) => {
    request(server.app)
      .delete('/api/v1/exemplos/id_exemplo')
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
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
    request(server.app).delete('/api/v1/exemplos/id_exemplo').expect(401, done);
  });
  */
});
