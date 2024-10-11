import fs from "fs";
import { build } from "./build.mjs";
import { request } from "./request.mjs";

const page = build();

fs.writeFileSync("page.html", page);

// request(page)
//   .then((data) => {
//     console.log("SUCESSO!", data.data);
//   })
//   .catch((err) => {
//     console.log("ERRO!", err?.data ?? err);
//   });
