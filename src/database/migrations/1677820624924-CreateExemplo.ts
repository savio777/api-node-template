import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateExemplo1677820624924 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exemplos',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'descricao',
            type: 'varchar',
          },
          {
            name: 'criadoEm',
            type: 'date',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'criadoPorId',
            type: 'varchar',
          },
          {
            name: 'alteradoEm',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'alteradorPorId',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'excluidoEm',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'atributoUm',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'atributoTres',
            type: 'clob',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('exemplos');
  }
}
