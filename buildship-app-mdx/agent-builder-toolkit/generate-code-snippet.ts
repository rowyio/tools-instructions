import { camelize } from "../utilts";

type Workflow = {
  id: string;
  name: string;
  inputs: any;
  [k: string]: any;
};

function addIntendation(str: string, intendation = 1, tabSize = "  ") {
  return str
    .split("\n")
    .map((s) => `${tabSize.repeat(intendation)}${s}`)
    .join("\n");
}

function generateFunction(tool: Workflow) {
  const functionParams = Object.entries(tool.inputs?.properties ?? {})
    .map(([key, input]) => `${key}`)
    .join(", \n");

  const toolTrigger = tool.triggers.find((t) => t.type === "tool-trigger");

  const functionBody = `async function ${camelize(tool.name)}({
${addIntendation(functionParams)}
}) {
  return callEndpoint(
    "${tool.id}",
    "${toolTrigger.id}",
    {
${addIntendation(functionParams, 3)}
    }
  );
}

`;

  return functionBody;
}

export function generateCodeSnippet(baseUrl: string, tools: Workflow[] = []) {
  const functions: string[] = [];

  for (const tool of tools) {
    functions.push(generateFunction(tool));
  }

  return `function callEndpoint(toolId, triggerId, params) {
  const url = \`${baseUrl}/$\{toolId\}/\${triggerId}\`;
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': apiKey
      },
      body: JSON.stringify(params)
    });
    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}

${functions.join("")}
`;
}
