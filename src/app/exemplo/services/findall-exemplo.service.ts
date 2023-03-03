import { IsNull, Like, Not } from 'typeorm';

import { AppDataSource } from '../../../database/data-source';
import { IFindAllExemploDto } from '../dto/findall-exemplo.dto';
import { Exemplo } from '../entities/exemplo.entity';

async function FindAllExemploService(dto: IFindAllExemploDto) {
  const { page, take, excluido, search } = dto;

  const skip = take * (page - 1);

  const exemploRepository = AppDataSource.getRepository(Exemplo);

  const exemplos = await exemploRepository.find({
    // @ts-ignore
    where: {
      descricao: search ? Like(`%${search}%`) : undefined,
      excluidoEm: excluido ? Not(IsNull) : null,
    },
    take,
    skip,
  });

  const total = exemplos.length;

  return {
    result: exemplos,
    page,
    take,
    total,
  };
}

export default FindAllExemploService;
