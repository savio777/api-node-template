import swaggerJSDoc from 'swagger-jsdoc';

export const exemploSchemaSwagger: {
  [key: string]: swaggerJSDoc.Reference | swaggerJSDoc.Schema;
} = {
  Exemplo: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        example: '220c6847-1dd7-4313-bae6-60b61ffba923',
      },
      descricao: {
        type: 'string',
        example: 'Descrição exemplo',
      },
    },
  },
  DataBodyCreateExemplo: {
    type: 'object',
    properties: {
      descricao: {
        type: 'string',
        example: 'Descrição exemplo',
      },
    },
  },
};

export const exemploPathsSwagger: swaggerJSDoc.Paths = {
  '/api/v1/exemplos': {
    post: {
      tags: ['Exemplo'],
      security: [
        {
          BarerAuth: [],
        },
      ],
      description: 'Endpoint criação exemplo',
      summary: 'Criar um exemplo',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/DataBodyCreateExemplo',
            },
          },
        },
      },
      responses: {
        '201': {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Exemplo',
              },
            },
          },
        },
        '400': {
          description: 'Bad request',
        },
      },
    },
    get: {
      tags: ['Exemplo'],
      security: [
        {
          BarerAuth: [],
        },
      ],
      description: 'Endpoint listagem de exemplos',
      summary: 'Listagem exemplos',
      parameters: [
        {
          name: 'search',
          in: 'query',
          schema: {
            type: 'string',
          },
        },
        {
          name: 'take',
          in: 'query',
          schema: {
            type: 'number',
          },
        },
        {
          name: 'page',
          in: 'query',
          schema: {
            type: 'number',
          },
        },
      ],
      responses: {
        '201': {
          description: 'Created',
          content: {
            'application/json': {
              result: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Exemplo',
                },
              },
              take: {
                type: 'number',
                example: 10,
                description:
                  'Quantidade de registros que está sendo retornado por página',
              },
              page: {
                type: 'number',
                example: 1,
                description: 'Página atual',
              },
              total: {
                type: 'number',
                example: 25,
                description: 'Total de registros retornados na pesquisa',
              },
            },
          },
        },
        '400': {
          description: 'Bad request',
        },
      },
    },
  },
  '/api/v1/exemplos/{id}': {
    put: {
      tags: ['Exemplo'],
      security: [
        {
          BarerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'id',
          example: '220c6847-1dd7-4313-bae6-60b61ffba923',
          in: 'path',
          description: 'Id do exemplo.',
          schema: {
            type: 'string',
          },
          required: true,
        },
      ],
      description: 'Endpoint edita um exemplo',
      summary: 'Editar um exemplo',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/DataBodyCreateExemplo',
            },
          },
        },
      },
      responses: {
        '201': {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Exemplo',
              },
            },
          },
        },
        '400': {
          description: 'Bad request',
        },
      },
    },
    delete: {
      tags: ['Exemplo'],
      security: [
        {
          BarerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'id',
          example: '220c6847-1dd7-4313-bae6-60b61ffba923',
          in: 'path',
          description: 'Id do exemplo.',
          schema: {
            type: 'string',
          },
          required: true,
        },
      ],
      description: 'Endpoint edita um exemplo',
      summary: 'Editar um exemplo',
      responses: {
        '201': {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Exemplo',
              },
            },
          },
        },
        '400': {
          description: 'Bad request',
        },
      },
    },
  },
};
