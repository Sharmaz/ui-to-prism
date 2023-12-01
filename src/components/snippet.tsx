import { TableElement } from '../types/definitions';

const Snippet = ({ tables }: TableElement[] | any) => (
  <div className="block text-slate-200 bg-slate-600 w-2/3 h-full mt-4">
    <pre>
      <code>
        {`
          datasource db {
            provider = "postgresql"
            url      = env("DATABASE_URL")
          }

          generator client {
            provider = "prisma-client-js"
          }`}
        {
        tables.map((table) => (
          <div key={table.id} className="ml-24 mt-6">
            <span>model</span>
            <span>{` ${table.name} {`}</span>
            {
              table.properties.map((attr) => (
                <div key={attr.id} className="flex ml-8">
                  <span className="w-1/6">{attr.name}</span>
                  <span>{attr.type}</span>
                </div>
              ))
            }
            {
              table.relationships.map((rel) => (
                <div key={table.relationships.length + rel.id} className="flex ml-8">
                  <span className="w-1/6">{rel.name}</span>
                  <span className="w-1/6">{rel.table}</span>
                  <span>{`@relation(fields: [${rel.field}], refereces:[${rel.reference}])`}</span>
                </div>
              ))
            }
            <span>{'}'}</span>
          </div>
        ))
        }
      </code>
    </pre>
  </div>
);

export default Snippet;
