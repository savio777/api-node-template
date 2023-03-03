import { v4 as uuid } from 'uuid';

import { AppDataSource } from '../../../database/data-source';
import { Exemplo } from '../entities/exemplo.entity';
import { IUpdateExemploDto } from '../dto/update-exemplo.dto';

async function UpdateExemploService(
  //session: ISession,
  id: string,
  dto: IUpdateExemploDto,
) {
  const { descricao } = dto;

  const exemploRepository = AppDataSource.getRepository(Exemplo);

  const exemplo = await exemploRepository.findOneBy({ id });

  if (!exemplo) {
    throw new BadRequestException('Exemplo não encontrado');
  }

  //exemplo.alteradorPorId = session.user.uuid;
  exemplo.alteradorPorId = uuid();
  exemplo.alteradoEm = new Date();
  exemplo.descricao = descricao;

  await exemploRepository.save(exemplo);

  return exemplo;
}

export default UpdateExemploService;
