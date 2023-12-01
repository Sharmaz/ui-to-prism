import { TableElement } from '../types/definitions';

const Snippet = ({ tables }: TableElement[] | any) => (
  <div className="block text-slate-200 bg-slate-500 w-2/3 h-full mt-4">
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
            <span className="text-pink-700">model</span>
            <span className="text-violet-800">{` ${table.name} {`}</span>
            {
              table.properties.map((attr) => (
                <div key={attr.id} className="flex ml-8">
                  <span className="w-1/6 text-gray-800">{attr.name}</span>
                  <span className="text-violet-800">{attr.type}</span>
                </div>
              ))
            }
            {
              table.relationships.map((rel) => (
                <div key={table.relationships.length + rel.id} className="flex ml-8">
                  <span className="w-1/6 text-gray-800">{rel.name}</span>
                  <span className="w-1/6 text-violet-800">{rel.table}</span>
                  <span>
                    <span className="text-teal-500">@relation</span>
                    <span>(</span>
                    <span className="text-orange-500">fields: </span>
                    <span>[</span>
                    <span className="text-gray-800">{`${rel.field}`}</span>
                    <span>], </span>
                    <span className="text-orange-500">references: </span>
                    <span>[</span>
                    <span className="text-gray-800">{`${rel.reference}`}</span>
                    <span>])</span>
                  </span>
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
