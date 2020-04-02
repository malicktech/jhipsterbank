import { Moment } from 'moment';
import { ILabel } from 'app/shared/model/label.model';
import { IBankAccount } from 'app/shared/model/bank-account.model';
import { OperationType } from 'app/shared/model/enumerations/operation-type.model';

export interface IOperation {
  id?: number;
  date?: Moment;
  description?: string;
  amount?: number;
  type?: OperationType;
  labels?: ILabel[];
  bankAccount?: IBankAccount;
}

export class Operation implements IOperation {
  constructor(
    public id?: number,
    public date?: Moment,
    public description?: string,
    public amount?: number,
    public type?: OperationType,
    public labels?: ILabel[],
    public bankAccount?: IBankAccount
  ) {}
}
