import { boolean, InferType, number, object, string } from 'yup';

export type IFindAllExempleDto = InferType<typeof FindAllExempleDto>;

export const FindAllExempleDto = object({
  page: number().optional().default(1),
  take: number()
    .optional()
    .max(30, 'Número máximo de registros por página é 30.')
    .default(30),
  search: string()
    .optional()
    .max(50, 'Máximo de caracteres para pesquisa é 50.'),
  excluido: boolean().optional().default(false),
});
