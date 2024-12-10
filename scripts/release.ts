import path from "path";
import fs from "fs";
import inquirer from "inquirer";

enum VersionChange {
  SubVersion = 0,
  MainVersion = 1,
  CoreVersion = 2,
  Custom = 3,
}

const prompt = (options: any): Promise<any> =>
  new Promise((resolve, reject) => {
    inquirer
      .prompt(options)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

const packageAbsolute = path.join(__dirname, "../package.json");
let buffer: Buffer;
let content: any;

function readPackage() {
  try {
    console.info("[uiverse] reading package.json");
    buffer = fs.readFileSync(packageAbsolute);
    content = JSON.parse(buffer as any);
    console.info(`[uiverse] Current version of the package: ${content.version}`);
  } catch (err) {
    console.error("[uiverse] Failed to read package.json");
  }
}

function executeVersionChange(versionChange: VersionChange, version?: string): void {
  try {
    if (buffer) {
      let vsep: number[] = content.version.split(".");
      switch (versionChange) {
        case VersionChange.SubVersion:
          vsep[vsep.length - 1]++;
          console.info(`[uiverse] Sub version increased by 1 ~ ${vsep.join(".")}`);
          break;
        case VersionChange.MainVersion:
          vsep[vsep.length - 2]++;
          console.log(`[uiverse] Main version increased by 1 ~ ${vsep.join(".")}`);
          break;
        case VersionChange.CoreVersion:
          vsep[vsep.length - 3]++;
          console.info(`[uiverse] Core version increased by 1 ~ ${vsep.join(".")}`);
          break;
        case VersionChange.Custom:
          vsep = (version as any).split(".") as number[];
          break;
      }
      content.version = vsep.join(".");
      fs.writeFileSync(packageAbsolute, JSON.stringify(content, null, 2));
    }
  } catch (err) {
    console.error("[uiverse] Failed to update package: ", err);
  }
}

async function executeReleaseScript(): Promise<void> {
  readPackage();
  const versionSelection: { version: string } = await prompt([
    {
      type: "list",
      name: "version",
      message: `Select version type to increase from`,
      choices: ["SubVersion", "MainVersion", "CoreVersion", "Custom"],
    },
  ]);
  executeVersionChange(
    VersionChange[versionSelection.version as any] as any,
    versionSelection.version === "Custom"
      ? (
          await prompt({
            type: "input",
            name: "versionNumber",
            message: `Custom version number (current: ${content.version}) ~`,
          })
        ).versionNumber.toString()
      : ""
  );
}

executeReleaseScript();
