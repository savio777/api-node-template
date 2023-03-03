import { AppDataSource } from '../../../database/data-source';
import { Exemplo } from '../entities/exemplo.entity';

async function FindByIdExemploService(id: string) {
  const exemploRepository = AppDataSource.getRepository(Exemplo);

  const exemplo = await exemploRepository.findOneBy({ id });

  if (!exemplo) {
    throw new BadRequestException('Exemplo não encontrado');
  }

  return exemplo;
}

export default FindByIdExemploService;
