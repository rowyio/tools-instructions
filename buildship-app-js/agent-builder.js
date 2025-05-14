var Component=(()=>{var q=Object.create;var S=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty;var A=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ee=(e,t)=>{for(var s in t)S(e,s,{get:t[s],enumerable:!0})},D=(e,t,s,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of z(t))!Q.call(e,r)&&r!==s&&S(e,r,{get:()=>t[r],enumerable:!(o=G(t,r))||o.enumerable});return e};var w=(e,t,s)=>(s=e!=null?q(Z(e)):{},D(t||!e||!e.__esModule?S(s,"default",{value:e,enumerable:!0}):s,e)),te=e=>D(S({},"__esModule",{value:!0}),e);var C=A((se,M)=>{M.exports=_jsx_runtime});var v=A((he,R)=>{R.exports=React});var ie={};ee(ie,{AgentSelector:()=>J,default:()=>V,frontmatter:()=>ae});var x=w(C());var{useMDXComponents:f}=MdxJsReact;var l=w(C());var oe=function(t){let{ClipboardField:s,Typography:o}=f()||{};s||O("ClipboardField",!0),o||O("Typography",!0);let[r,d]=t.useState(""),p=t.triggerValues?.["config.apiKey"],c=t.projectId,i=t.flowId,u=t.flowLabel,g=p?t.triggerValues?.["config.toolName"]:"",m=`npx -y buildship-tools create-mcp-server --project ${c} --flows ${i} --apiKey ${p} --token ${r} --outputFolder ${g} --client claude`;return t.useEffect(()=>{t.getIdToken&&t.getIdToken().then(a=>a&&d(a))},[t.getIdToken]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{display:"flex",padding:"8px",backgroundColor:t.theme.palette.text[50],borderRadius:"8px",width:"fit-content",marginBottom:"16px"},children:(0,l.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/website-a1s39m.appspot.com/o/buildship-app-logos%2Fanthropic.png?alt=media&token=ec0eb8dc-f0d4-4f97-a144-023f1aa8118e",width:"16",height:"16"})}),(0,l.jsx)(o,{sx:a=>({...a.typography.headline6}),children:"Claude MCP - Setup Guide"}),(0,l.jsx)("a",{href:"https://docs.buildship.com/tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(o,{sx:a=>({marginTop:"24px",...a.typography.body}),children:"Documentation \u2197"})}),(0,l.jsx)("a",{href:"https://docs.buildship.com/tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(o,{sx:a=>({marginTop:"8px",...a.typography.body}),children:"Video Tutorial \u2197"})}),(0,l.jsx)(o,{sx:a=>({marginTop:"24px",color:a.palette.text[900],...a.typography.body}),children:"Pre-requisite"}),(0,l.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,l.jsx)("li",{children:(0,l.jsxs)(o,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:["Ensure you have the ",(0,l.jsx)("a",{href:"https://claude.ai/download",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Claude Desktop"})," app installed"]})}),(0,l.jsx)("li",{children:(0,l.jsx)(o,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:'Use "Ship" button on top to deploy your workflow'})}),(0,l.jsx)("li",{children:(0,l.jsxs)(o,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:["You'll need to have ",(0,l.jsx)("a",{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Node.js installed"})," to run the commands"]})})]}),(0,l.jsx)(o,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:"You can add the MCP tool to your Claude app using one of the following options."}),(0,l.jsx)(o,{sx:a=>({marginTop:"24px",color:a.palette.text[900],...a.typography.body}),children:"Option 1: Hosted on BuildShip"}),(0,l.jsx)(s,{content:m+" --proxy",label:"",description:"Recommended for easy hosted experience. Run the following command from a terminal or command line tool."}),(0,l.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"12px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,l.jsx)("li",{children:(0,l.jsxs)(o,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:["After the command updates your Claude config, ",(0,l.jsx)("strong",{children:"restart the Claude Desktop app"})," (if it's open) to load the MCP tool added"]})}),(0,l.jsx)("li",{children:(0,l.jsx)(o,{sx:a=>({marginTop:"12px",color:a.palette.text[400],...a.typography.body}),children:"To test, Ask Claude to use the tool. Claude will ask for permission. Once you allow it, the tool will run and show the result."})})]}),(0,l.jsx)(o,{sx:a=>({marginTop:"12px",color:a.palette.text[400],...a.typography.body}),children:"You'll see it successfully updated Claude config when you see a 'Tool' icon within Claude Chat"}),(0,l.jsx)("img",{src:"https://storage.googleapis.com/buildship-2vqhlv-us-central1/tool-trigger-assets/claude-tool.png",width:"100%",height:"auto",style:{marginTop:"16px",borderRadius:"4px"}}),(0,l.jsx)(o,{sx:a=>({marginTop:"8px",color:a.palette.text[400],...a.typography.body}),children:"Note: Since the tool is hosted on BuildShip, it will use your BuildShip credits when executed."}),(0,l.jsx)(o,{sx:a=>({marginTop:"24px",color:a.palette.text[900],...a.typography.body}),children:"Option 2: Self hosted"}),(0,l.jsx)(o,{sx:a=>({marginTop:"4px",color:a.palette.text[400],...a.typography.body}),children:"Run the following command \u2014 it will:"}),(0,l.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,l.jsx)("li",{children:(0,l.jsx)(o,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:"Convert the workflow into a JavaScript function"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:"Download the function to your local machine"})})]}),(0,l.jsx)(s,{content:m,label:"",description:""}),(0,l.jsx)(o,{sx:a=>({marginTop:"8px",color:a.palette.text[400],...a.typography.body}),children:"You can then connect the exported function to Claude using the MCP protocol."})]})};function re(e){return(0,l.jsx)(l.Fragment,{children:`
`})}function P(e={}){return(0,l.jsx)(oe,{...e,children:(0,l.jsx)(re,{...e})})}function O(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var n=w(C());var K=e=>{let{Box:t,ClipboardField:s,Typography:o}=f()||{};return t||I("Box",!0),s||I("ClipboardField",!0),o||I("Typography",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{display:"flex",padding:"8px",backgroundColor:e.theme.palette.text[50],borderRadius:"8px",width:"fit-content",marginBottom:"16px"},children:(0,n.jsx)("img",{src:"https://storage.googleapis.com/buildship-app-us-central1/icons/elevenlabs.jpeg",width:"16",height:"16"})}),(0,n.jsx)(o,{sx:r=>({...r.typography.headline6}),children:"ElevenLabs - Setup Guide"}),(0,n.jsx)("a",{href:"https://docs.buildship.com/tools/elevenlabs",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o,{sx:r=>({marginTop:"24px",...r.typography.body}),children:"Documentation \u2197"})}),(0,n.jsx)("a",{href:"https://docs.buildship.com/tools/elevenlabs",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o,{sx:r=>({marginTop:"8px",...r.typography.body}),children:"Video Tutorial \u2197"})}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"Pre-requisite"}),(0,n.jsxs)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:["Open ",(0,n.jsx)("a",{href:"https://elevenlabs.io/app/conversational-ai/agents",target:"_blank",rel:"noopener noreferrer",children:"ElevenLabs Voice Agents"})," Dashboard, set up a conversation AI Agent and follow the steps below to add the tool to it."]}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"1. Create a new tool"}),(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:`Click the "Add tool" button from the agent's setup section and select "Custom Tool" option from the dropdown menu.`}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"2. Configure the tool"}),(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:'Use the "Webhook" tool type and add the configuration as follows'}),(0,n.jsxs)(t,{sx:{marginTop:"12px",display:"flex",gap:"12px",flexDirection:"column"},children:[(0,n.jsx)(s,{content:e.flowLabel,label:"Copy the Name",description:""}),(0,n.jsx)(s,{content:e.triggerValues?.["config.toolDescription"],label:"Copy the Description",description:"",multiline:!0}),(0,n.jsxs)(t,{children:[(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:"Set the method to POST and copy the following Endpoint URL:"}),(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1,gap:"8px",minHeight:"28px"},children:[(0,n.jsx)(t,{sx:{flex:"1 0 25%"},children:(0,n.jsx)(s,{content:"POST",showCopyButton:!1})}),(0,n.jsx)(t,{sx:{flex:"1 0 75%",width:"75%"},children:(0,n.jsx)(s,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`})})]})]})]}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"3. Set Headers"}),(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:"In the \u201CHeaders\u201D section click \u201CAdd header\u201D. Then, fill it as follows"}),(0,n.jsxs)("ul",{style:{marginTop:"12px",color:e.theme.palette.text[400],...e.theme.typography.body,listStyleType:"none",paddingLeft:"0px"},children:[(0,n.jsx)("li",{children:(0,n.jsx)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"Type \u2192 Value"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"Name \u2192 BUILDSHIP_API_KEY"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"Value \u2192  Copy this from the Tool API Key section on BuildShip (left panel)"})})]}),(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1,gap:"8px",minHeight:"28px"},children:[(0,n.jsx)(t,{sx:{flex:"1 0 50%"},children:(0,n.jsx)(s,{content:"BUILDSHIP_API_KEY"})}),(0,n.jsx)(t,{sx:{flex:"1 0 50%",width:"50%"},children:(0,n.jsx)(s,{content:e.triggerValues?.["config.apiKey"]})})]}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"4. Enable Body Parameters"}),(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:"Enable Body Parameters, click \u201CAdd property\u201D. And copy the data type, identifier and Description for each. Select the value type as \u201CDynamic Variable\u201D."}),ne(e.inputs)]})},ne=e=>{let{Box:t,ClipboardField:s,Typography:o}=f()||{};t||I("Box",!0),s||I("ClipboardField",!0),o||I("Typography",!0);let r=e?.properties||{},d=Object.entries(r).sort((p,c)=>{let i=p[1].buildship?.index??1/0,u=c[1].buildship?.index??1/0;return i-u});return(0,n.jsxs)(t,{sx:{marginTop:"12px"},children:[(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1},children:[(0,n.jsx)(t,{sx:{flex:"1 0 25%"},children:(0,n.jsx)(o,{sx:p=>({color:p.palette.text[400],...p.typography.body}),children:"Data type"})}),(0,n.jsx)(t,{sx:{flex:"1 0 75%",width:"75%"},children:(0,n.jsx)(o,{sx:p=>({color:p.palette.text[400],...p.typography.body}),children:"Identifier"})})]}),d.map(([p,c])=>(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"column",flexGrow:1,gap:"2px",marginBottom:"8px"},children:[(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1,gap:"8px",minHeight:"28px"},children:[(0,n.jsx)(t,{sx:{flex:"1 0 20%"},children:(0,n.jsx)(s,{content:c.type.charAt(0).toUpperCase()+c.type.slice(1),showCopyButton:!1})}),(0,n.jsx)(t,{sx:{flex:"1 0 75%",width:"75%"},children:(0,n.jsx)(s,{content:p})})]}),(0,n.jsx)(t,{sx:{flex:"1",width:"100%"},children:(0,n.jsx)(s,{content:c.description||"[No description provided]",description:"",multiline:!1})})]},p))]})};function I(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var y=w(C());var F=w(v());var B=e=>{let{Box:t,ClipboardTextArea:s,CodeMirror:o,CodeSamples:r,CopyButton:d,Typography:p}=f()||{};t||j("Box",!0),s||j("ClipboardTextArea",!0),o||j("CodeMirror",!0),r||j("CodeSamples",!0),d||j("CopyButton",!0),p||j("Typography",!0);let c=(0,F.useMemo)(()=>JSON.stringify(e.toolFlowToOpenApi([e.flow],e.host),null,2),[e.flow,e.host]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p,{sx:i=>({color:i.palette.text[900],...i.typography.headline6}),children:"Default Setup Guide"}),(0,y.jsx)(p,{sx:i=>({color:i.palette.text[400],marginTop:"4px",...i.typography.body}),children:"Each agent platform has its own setup process. Please select your specific agent from the options above. Below you'll find universal specifications that work across all agent platforms."}),(0,y.jsx)(p,{sx:i=>({color:i.palette.text[900],marginTop:"24px",...i.typography.body}),children:"OpenAPI Specification"}),(0,y.jsxs)(t,{sx:{position:"relative"},children:[(0,y.jsx)(t,{sx:{marginTop:"4px",maxHeight:"600px",overflow:"auto"},children:(0,y.jsx)(o,{value:c,onChange:()=>{},extensions:[e.cm.extensions.json()],codemirrorProps:{readOnly:!0,editable:!1},wrapLines:!0,containerSx:{"& .cm-editor":{borderRadius:"4px",backgroundColor:i=>i.palette.text[50]}}})}),(0,y.jsx)(d,{content:c,sx:{position:"absolute",right:16,top:8}})]}),(0,y.jsx)(p,{sx:i=>({color:i.palette.text[900],marginTop:"24px",...i.typography.body}),children:"Schema Definitions"}),(0,y.jsx)(p,{sx:i=>({marginTop:"4px",color:i.palette.text[400],...i.typography.body}),children:"These JSON schemas define the expected input parameters and output formats for your tool. Use them to ensure proper data formatting and validation."}),(0,y.jsx)(r,{samples:[{code:JSON.stringify(e.simplifySchema(e.inputs),null,2),label:"Tool Input Schema",language:"json"},{code:JSON.stringify(e.simplifySchema(e.output),null,2),label:"Tool Output Schema",language:"json"}]}),(0,y.jsx)(p,{sx:i=>({marginTop:"24px",color:i.palette.text[900],...i.typography.body}),children:"API Endpoint"}),(0,y.jsxs)(p,{sx:i=>({marginTop:"4px",color:i.palette.text[400],...i.typography.body}),children:["To invoke this tool, send a POST request to the endpoint below with your input parameters. Include your ",(0,y.jsx)("code",{children:"BUILDSHIP_API_KEY"})," in the request header for authentication."]}),(0,y.jsx)(s,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`,label:"",description:""})]})};function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var b=w(C());var L=e=>{let{ClipboardTextArea:t,CodeSamples:s,Typography:o}=f()||{};t||$("ClipboardTextArea",!0),s||$("CodeSamples",!0),o||$("Typography",!0);let r=e.inputs.properties||{},d=(i=2)=>{let u=" ".repeat(i);return Object.entries(r).map(([g,m])=>{let a=m.type==="number"?"0":'""';return`${u}${g}: ${a}, // ${m.title||g}`}).join(`
`)},p=`const fetch = require('node-fetch');

/**
 * Function to call workflow using fetch
 * @param {object} params - Input parameters for the workflow
 * @param {string} apiKey - Your API key
 * @returns {Promise<object>} - The workflow result
 */
async function callWorkflow(params, apiKey) {
  const url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}";
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': apiKey
      },
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error calling workflow:', error);
    throw error;
  }
}

// Example usage
async function main() {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  
  const params = {
${d()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

main();`,c=`import fetch from 'node-fetch';

interface WorkflowParams {
${Object.entries(e.inputs.properties||{}).map(([i,u])=>`  ${i}: ${u.type==="number"?"number":"string"}; // ${u.title||i}`).join(`
`)}
}

interface WorkflowResponse {
  // Add response type definitions based on your workflow output
  [key: string]: any;
}

/**
 * Function to call workflow using fetch
 * @param params - Input parameters for the workflow
 * @param apiKey - Your API key
 * @returns Promise resolving to the workflow result
 */
async function callWorkflow(params: WorkflowParams, apiKey: string): Promise<WorkflowResponse> {
  const url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}";
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': apiKey
      },
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error calling workflow:', error);
    throw error;
  }
}

// Example usage
async function main() {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  
  const params: WorkflowParams = {
${d()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

main();`;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{sx:i=>({...i.typography.headline6}),children:"Node.js Integration"}),(0,b.jsx)(o,{sx:i=>({marginTop:"4px",color:i.palette.text[400],...i.typography.body}),children:"Make sure you have the node-fetch package installed:"}),(0,b.jsx)(t,{content:"npm install node-fetch@2",label:"",description:""}),(0,b.jsx)(o,{sx:i=>({marginTop:"16px",color:i.palette.text[400],...i.typography.body}),children:"Then use this code to call your workflow:"}),(0,b.jsx)(s,{samples:[{code:p,label:"Node.js",language:"js"},{code:c,label:"TypeScript",language:"ts"}]})]})};function $(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var k=w(C());var Y=e=>{let{CodeSamples:t,Typography:s}=f()||{};t||W("CodeSamples",!0),s||W("Typography",!0);let o=e.inputs.properties||{},r=(c=2)=>{let i=" ".repeat(c);return Object.entries(o).map(([u,g])=>{let m=g.type==="number"?"0":'""';return`${i}${u}: ${m}, // ${g.title||u}`}).join(`
`)},d=`/**
 * Function to call workflow using fetch
 * @param {object} params - Input parameters for the workflow
 * @param {string} apiKey - Your API key
 * @returns {Promise<object>} - The workflow result
 */
async function callWorkflow(params, apiKey) {
  const url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}";
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': apiKey
      },
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error calling workflow:', error);
    throw error;
  }
}

// Example usage
async function executeExample() {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  
  const params = {
${r()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

executeExample();`,p=`/**
 * Function to call workflow using fetch
 * @param {object} params - Input parameters for the workflow
 * @param {string} apiKey - Your API key
 * @returns {Promise<object>} - The workflow result
 */
async function callWorkflow(params: Record<string, any>, apiKey: string): Promise<any> {
  const url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}";
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': apiKey
      },
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error calling workflow:', error);
    throw error;
  }
}

// Example usage
async function executeExample(): Promise<void> {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  
  const params = {
${r()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

executeExample();`;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s,{sx:c=>({...c.typography.headline6}),children:"Web Browser Integration"}),(0,k.jsx)(s,{sx:c=>({marginTop:"4px",color:c.palette.text[400],...c.typography.body}),children:"Use this code to call your workflow from web applications:"}),(0,k.jsx)(t,{samples:[{code:d,label:"JavaScript",language:"js"},{code:p,label:"TypeScript",language:"ts"}]})]})};function W(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var T=w(C());var X=e=>{let{ClipboardTextArea:t,CodeSamples:s,Typography:o}=f()||{};t||E("ClipboardTextArea",!0),s||E("CodeSamples",!0),o||E("Typography",!0);let r=e.inputs.properties||{},d=()=>Object.entries(r).map(([c,i])=>{let u=i.type==="number"?"0":'""';return`    "${c}": ${u}, # ${i.title||c}`}).join(`
`),p=`import requests
import json

def call_workflow(params, api_key):
    """
    Function to call workflow using requests
    
    Args:
        params (dict): Input parameters for the workflow
        api_key (str): Your API key
        
    Returns:
        dict: The workflow result
    """
    url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}"
    
    headers = {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': api_key
    }
    
    try:
        response = requests.post(url, headers=headers, json=params)
        response.raise_for_status()  # Raise exception for 4XX/5XX status codes
        
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error calling workflow: {e}")
        raise

# Example usage
def main():
    api_key = "YOUR_API_KEY"  # Replace with your actual API key
    
    params = {
${d()}
    }
    
    try:
        result = call_workflow(params, api_key)
        print("Workflow result:", result)
        return result
    except Exception as e:
        print(f"Failed to execute workflow: {e}")

if __name__ == "__main__":
    main()`;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(o,{sx:c=>({...c.typography.headline6}),children:"Python Integration"}),(0,T.jsx)(o,{sx:c=>({marginTop:"4px",color:c.palette.text[400],...c.typography.body}),children:"Make sure you have the requests library installed:"}),(0,T.jsx)(t,{content:"pip install requests",label:"",description:""}),(0,T.jsx)(o,{sx:c=>({marginTop:"16px",color:c.palette.text[400],...c.typography.body}),children:"Then use this code to call your workflow:"}),(0,T.jsx)(s,{samples:[{code:p,label:"Python",language:"js"}]})]})};function E(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var h=w(C());var Ie=w(v());var U=e=>{let{ClipboardField:t,CodeSamples:s,CodeViewer:o,CopyButton:r,Typography:d}=f()||{};t||_("ClipboardField",!0),s||_("CodeSamples",!0),o||_("CodeViewer",!0),r||_("CopyButton",!0),d||_("Typography",!0);let p=e.inputs.properties||{},c=(i=2)=>{let u=" ".repeat(i);return Object.entries(p).map(([g,m])=>{let a=m.type==="number"?"0":'""';return`${u}${g}: ${a}, // ${m.title||g}`}).join(`
	`)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{sx:i=>({...i.typography.headline6,marginBottom:"16px"}),children:"Vibe Coder - Setup Guide"}),(0,h.jsx)(t,{label:"Endpoint URL",content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`}),(0,h.jsx)(d,{sx:{marginTop:"16px"},children:"Code Snippet"}),(0,h.jsx)(d,{sx:i=>({color:i.palette.text[400],marginTop:"4px"}),children:"Copy and paste the code snippet to your app or website."}),(0,h.jsx)("div",{style:{marginTop:"16px"},children:(0,h.jsx)(s,{samples:[{code:`/**
 * Function to call workflow using fetch
 * @param {object} params - Input parameters for the workflow
 * @returns {Promise<object>} - The workflow result
 */
                            
async function callEndpoint( params ) {
    const url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}";
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


// Example usage
async function executeExample() {
    const params = {
    ${c()}
    };
  
  try {
    const result = await callWorkflow(params);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

executeExample();`,language:"js",label:"JavaScript"}]})}),(()=>{let i=`Create an intuitive & responsive webapp using the given endpoint and the example inputs

Rules:
- Use only the inputs given. 
- Include validation for required fields if needed.
- Handle the output properly depending what it returns (string, number, etc) specially in case of returning lists or json outputs.

Create an intuitive & responsive webapp using the given endpoint and the example inputs

Rules:
- Use only the inputs given.
- Include validation for required fields if needed.
- Handle the output properly depending what it returns (string, number, etc) specially in case of returning lists or json outputs.

async function callEndpoint(${Object.keys(e.inputs.properties??{}).join(", ")}) {
    const url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}";
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    ${e.triggerValues?.["config.method"]==="GET"||Object.keys(e.inputs.properties??{}).length===0?"const params = {}":`const params = {
        ${Object.keys(e.inputs.properties??{}).map(u=>u+": "+u).join(`,
		`)}
    }`}
    
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

Here are sample inputs: 
${e.getInputTypes?e.getInputTypes(e.inputs||{}):`{
  ${Object.entries(e.inputs?.properties??{}).map(([u,g])=>`${u}: ${g.type}`).join(`,
    `)}
}`}


The output of this endpoint is:
${e.getInputTypes?e.getInputTypes(e.output||{}):`{
  ${Object.entries(e.output?.properties??{}).map(([u,g])=>`${u}: ${g.type}`).join(`,
    `)}
}`}
`;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{sx:{marginTop:"16px"},children:"AI Handoff"}),(0,h.jsx)(d,{sx:u=>({color:u.palette.text[400],marginTop:"4px"}),children:"Paste the following prompt into your AI App builder to generate the frontend by connecting to your BuildShip API endpoint and creating the UI you need."}),(0,h.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",margin:"16px 0 "},children:[(0,h.jsx)(d,{children:"Prompt"}),(0,h.jsx)(r,{variant:"expanded",label:"Copy prompt",content:i})]}),(0,h.jsx)(o,{copy:!1,code:i})]})})()]})};function _(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var ae=void 0,J=e=>{let{Select:t,Typography:s}=f()||{};t||N("Select",!0),s||N("Typography",!0);let[o,r]=e.useState("generic-agent");function d(p){return p.replace(/(?:^\w|[A-Z]|\b\w)/g,function(c,i){return i===0?c.toLowerCase():c.toUpperCase()}).replace(/\s+/g,"")}return(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"22px"},children:[(0,x.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.modal,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[(0,x.jsx)(s,{sx:p=>({marginBottom:"8px",color:p.palette.text[900]}),children:"Select your agent builder"}),(0,x.jsx)(t,{value:o,onChange:p=>r(p.target.value),options:[{value:"vibe-coder",render:"Vibe Coder Agent"},{value:"11labs",render:"ElevenLabs"},{value:"claude",render:"Claude Desktop (MCP Server)"},{value:"nodejs",render:"Node.js Fetch Implementation"},{value:"python",render:"Python Requests Implementation"},{value:"web",render:"Web Browser Implementation"},{value:"generic-agent",render:"Default Setup Guide"}]})]}),(0,x.jsx)("div",{style:{marginTop:"16px"}}),(0,x.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.modal,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[o==="vibe-coder"&&(0,x.jsx)(U,{...e,openApiSpec:JSON.stringify(e.toolFlowToOpenApi([e.flow],e.host),null,2)}),o==="claude"&&(0,x.jsx)(P,{flowLabel:d(e.flowLabel??""),...e}),o==="11labs"&&(0,x.jsx)(K,{...e}),o==="generic-agent"&&(0,x.jsx)(B,{...e}),o==="nodejs"&&(0,x.jsx)(L,{...e}),o==="python"&&(0,x.jsx)(X,{...e}),o==="web"&&(0,x.jsx)(Y,{...e})]})]})};function H(e){return(0,x.jsx)(J,{...e})}function V(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(H,{...e})}):H(e)}function N(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}return te(ie);})();
;return Component;