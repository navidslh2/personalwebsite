// app/api/projects/route.ts
import { projects } from '@/lib/data';

export async function GET() {
  return Response.json(projects);
}
