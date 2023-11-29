export type TableElement = {
  id: number;
  name: string;
  properties: Property[];
  relationships?: Relationship[];
};

export type Property = {
  id: number;
  name: string;
  type: string;
};

export type Relationship = {
  id: number;
  table: string;
  foreingKey: string;
};
