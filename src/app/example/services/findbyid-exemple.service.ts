import { prismaClient } from '../../../database/prisma-client';

async function FindByIdExemploService(id: string) {
  const exemplo = await prismaClient.example.findFirst({ where: { id } });

  if (!exemplo) {
    throw new BadRequestException('Example não encontrado');
  }

  return exemplo;
}

export default FindByIdExemploService;
