import { v4 as uuid } from 'uuid';

import { ICreateExemploDto } from '../dto/create-exemplo.dto';
import { AppDataSource } from '../../../database/data-source';
import { Exemplo } from '../entities/exemplo.entity';

async function CreateExemploService(
  //session: ISession,
  dto: ICreateExemploDto,
) {
  const { descricao } = dto;

  const exemploRepository = AppDataSource.getRepository(Exemplo);

  const exemplo = exemploRepository.create({
    descricao,
    criadoPorId: uuid(),
    //criadoPorId: session.user.uuid,
  });

  await exemploRepository.save(exemplo);

  return exemplo;
}

export default CreateExemploService;
