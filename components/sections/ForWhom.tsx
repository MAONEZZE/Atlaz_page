import { readdirSync } from "fs";
import { join } from "path";
import { ForWhomClient } from "./ForWhomClient";

export function ForWhom() {
  let files: string[] = [];
  try {
    files = readdirSync(join(process.cwd(), "public/clientes")).filter((f) =>
      /\.(png|jpg|jpeg|webp)$/i.test(f)
    );
  } catch {
    files = [];
  }
  return <ForWhomClient clientFiles={files} />;
}
