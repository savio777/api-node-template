import { IFindAllExempleDto } from '../dto/findall-exemple.dto';
import { prismaClient } from '../../../database/prisma-client';

async function FindAllExemploService(dto: IFindAllExempleDto) {
  const { page, take, excluido, search } = dto;

  const skip = take * (page - 1);

  const examples = await prismaClient.example.findMany({
    where: {
      description: search ? { contains: search } : undefined,
      deleted_at: excluido ? { not: null } : null,
    },
    take,
    skip,
  });

  const total = examples.length;

  return {
    result: examples,
    page,
    take,
    total,
  };
}

export default FindAllExemploService;
