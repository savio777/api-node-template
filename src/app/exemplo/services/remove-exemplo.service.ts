import { v4 as uuid } from 'uuid';

import { AppDataSource } from '../../../database/data-source';
import { Exemplo } from '../entities/exemplo.entity';

async function RemoveExemploService(
  //session: ISession,
  id: string,
) {
  const exemploRepository = AppDataSource.getRepository(Exemplo);

  const exemplo = await exemploRepository.findOneBy({ id });

  if (!exemplo) {
    throw new BadRequestException('Exemplo não encontrado');
  }

  //exemplo.alteradorPorId = session.user.uuid;
  exemplo.alteradorPorId = uuid();
  exemplo.excluidoEm = new Date();

  await exemploRepository.save(exemplo);

  return exemplo;
}

export default RemoveExemploService;
