import { InferType, object, string } from 'yup';

export type ICreateExemploDto = InferType<typeof CreateExemploDto>;

export const CreateExemploDto = object({
  descricao: string().required('Descrição é obrigatório.'),
});
