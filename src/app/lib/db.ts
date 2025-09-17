"use server";
import { neon } from "@neondatabase/serverless";

// This function runs only on the server
export const sql = neon(process.env.DATABASE_URL!);

// Example query function
export async function getData() {
  // Replace ... with your SQL query
  const data = await sql`SELECT * FROM your_table`;
  return data;
}

export async function testConnection() {
  // Try a simple query
  const result = await sql`SELECT 1 as test`;
  return result;
}