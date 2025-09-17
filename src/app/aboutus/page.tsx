import { testConnection } from "../lib/db";

export default async function TestDbPage() {
  const result = await testConnection();

  return (
    <div>
      <h1>Database Connection Test</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}