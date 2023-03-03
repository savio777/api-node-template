import { InferType } from 'yup';
import { CreateExemploDto } from './create-exemplo.dto';

export type IUpdateExemploDto = InferType<typeof UpdateExemploDto>;

export const UpdateExemploDto = CreateExemploDto;
