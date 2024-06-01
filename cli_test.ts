import { winget } from "./cli.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("winget") !== undefined;

Deno.test({
    name: "winget",
    ignore: !hasExe,
    fn: async () => {
        const result = await winget("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("v"));
    },
});
