import request from 'supertest';
import '../../src/index';

import server from '../../src/server';

describe('/exemplos/find', function () {
  // run migrations and others configs here

  it('...valida estrutura base de retorno', async () => {
    const resCreateExemplo = await request(server.app)
      .post('/api/v1/exemplos')
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .send({
        descricao: 'exemplo...',
      })
      .expect(200);

    const res = await request(server.app)
      .get('/api/v1/exemplos')
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .expect(200);

    expect(res.body).toEqual(
      expect.arrayContaining([expect.objectContaining(resCreateExemplo.body)]),
    );
  });

  it('...valida consulta de um único exemplo', async () => {
    const resCreateExemplo = await request(server.app)
      .post('/api/v1/exemplos')
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .send({
        descricao: 'exemplo...',
      })
      .expect(200);

    const res = await request(server.app)
      .get(`/api/v1/exemplos/${resCreateExemplo.body.id}`)
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .expect(200);

    expect(res.body).toMatchObject(resCreateExemplo.body);
  });

  it('...valida resultado de exemplo não encontrado', (done) => {
    request(server.app)
      .get('/api/v1/exemplos/id_exemplo')
      //.set('Authorization', accessTokenTest.getBearerAccessToken())
      .expect(
        400,
        {
          status: 400,
          message: 'Exemplo não encontrado',
        },
        done,
      );
  });

  // test session
  // eslint-disable-next-line jest/no-commented-out-tests
  /* 
   it('...valida obrigatoriedade do usuário autenticado', (done) => {
    request(server.app).get('/api/v1/exemplos').expect(401, done);
  });
  */
});
