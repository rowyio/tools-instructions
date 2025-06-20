var Component=(()=>{var N=Object.create;var I=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var J=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var A=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),z=(e,t)=>{for(var s in t)I(e,s,{get:t[s],enumerable:!0})},E=(e,t,s,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of q(t))!G.call(e,r)&&r!==s&&I(e,r,{get:()=>t[r],enumerable:!(o=V(t,r))||o.enumerable});return e};var b=(e,t,s)=>(s=e!=null?N(J(e)):{},E(t||!e||!e.__esModule?I(s,"default",{value:e,enumerable:!0}):s,e)),Z=e=>E(I({},"__esModule",{value:!0}),e);var C=A((ie,D)=>{D.exports=_jsx_runtime});var v=A((de,R)=>{R.exports=React});var re={};z(re,{AgentSelector:()=>W,default:()=>H,frontmatter:()=>oe});var x=b(C());var{useMDXComponents:f}=MdxJsReact;var l=b(C());var Q=function(t){let{ClipboardField:s,Typography:o}=f()||{};s||M("ClipboardField",!0),o||M("Typography",!0);let[r,d]=t.useState(""),p=t.triggerValues?.["config.apiKey"],c=t.projectId,a=t.flowId,u=t.flowLabel,g=p?t.triggerValues?.["config.toolName"]:"",T=`npx -y buildship-tools create-mcp-server --project ${c} --flows ${a} --apiKey ${p} --token ${r} --outputFolder ${g} --client claude`;return t.useEffect(()=>{t.getIdToken&&t.getIdToken().then(i=>i&&d(i))},[t.getIdToken]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{display:"flex",padding:"8px",backgroundColor:t.theme.palette.text[50],borderRadius:"8px",width:"fit-content",marginBottom:"16px"},children:(0,l.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/website-a1s39m.appspot.com/o/buildship-app-logos%2Fanthropic.png?alt=media&token=ec0eb8dc-f0d4-4f97-a144-023f1aa8118e",width:"16",height:"16"})}),(0,l.jsx)(o,{sx:i=>({...i.typography.headline6}),children:"Claude MCP - Setup Guide"}),(0,l.jsx)("a",{href:"https://docs.buildship.com/tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(o,{sx:i=>({marginTop:"24px",...i.typography.body}),children:"Documentation \u2197"})}),(0,l.jsx)("a",{href:"https://youtu.be/mL8LaupRPbI",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(o,{sx:i=>({marginTop:"8px",...i.typography.body}),children:"Video Tutorial \u2197"})}),(0,l.jsx)(o,{sx:i=>({marginTop:"24px",color:i.palette.text[900],...i.typography.body}),children:"Pre-requisite"}),(0,l.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,l.jsx)("li",{children:(0,l.jsxs)(o,{sx:i=>({color:i.palette.text[400],...i.typography.body}),children:["Ensure you have the ",(0,l.jsx)("a",{href:"https://claude.ai/download",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Claude Desktop"})," app installed"]})}),(0,l.jsx)("li",{children:(0,l.jsx)(o,{sx:i=>({color:i.palette.text[400],...i.typography.body}),children:'Use "Ship" button on top to deploy your workflow'})}),(0,l.jsx)("li",{children:(0,l.jsxs)(o,{sx:i=>({color:i.palette.text[400],...i.typography.body}),children:["You'll need to have ",(0,l.jsx)("a",{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Node.js installed"})," to run the commands"]})})]}),(0,l.jsx)(o,{sx:i=>({color:i.palette.text[400],...i.typography.body}),children:"You can add the MCP tool to your Claude app using one of the following options."}),(0,l.jsx)(o,{sx:i=>({marginTop:"24px",color:i.palette.text[900],...i.typography.body}),children:"Option 1: Hosted on BuildShip"}),(0,l.jsx)(s,{content:T+" --proxy",label:"",description:"Recommended for easy hosted experience. Run the following command from a terminal or command line tool."}),(0,l.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"12px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,l.jsx)("li",{children:(0,l.jsxs)(o,{sx:i=>({color:i.palette.text[400],...i.typography.body}),children:["After the command updates your Claude config, ",(0,l.jsx)("strong",{children:"restart the Claude Desktop app"})," (if it's open) to load the MCP tool added"]})}),(0,l.jsx)("li",{children:(0,l.jsx)(o,{sx:i=>({marginTop:"12px",color:i.palette.text[400],...i.typography.body}),children:"To test, Ask Claude to use the tool. Claude will ask for permission. Once you allow it, the tool will run and show the result."})})]}),(0,l.jsx)(o,{sx:i=>({marginTop:"12px",color:i.palette.text[400],...i.typography.body}),children:"You'll see it successfully updated Claude config when you see a 'Tool' icon within Claude Chat"}),(0,l.jsx)("img",{src:"https://storage.googleapis.com/buildship-2vqhlv-us-central1/tool-trigger-assets/claude-tool.png",width:"100%",height:"auto",style:{marginTop:"16px",borderRadius:"4px"}}),(0,l.jsx)(o,{sx:i=>({marginTop:"8px",color:i.palette.text[400],...i.typography.body}),children:"Note: Since the tool is hosted on BuildShip, it will use your BuildShip credits when executed."}),(0,l.jsx)(o,{sx:i=>({marginTop:"24px",color:i.palette.text[900],...i.typography.body}),children:"Option 2: Self hosted"}),(0,l.jsx)(o,{sx:i=>({marginTop:"4px",color:i.palette.text[400],...i.typography.body}),children:"Run the following command \u2014 it will:"}),(0,l.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,l.jsx)("li",{children:(0,l.jsx)(o,{sx:i=>({color:i.palette.text[400],...i.typography.body}),children:"Convert the workflow into a JavaScript function"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o,{sx:i=>({color:i.palette.text[400],...i.typography.body}),children:"Download the function to your local machine"})})]}),(0,l.jsx)(s,{content:T,label:"",description:""}),(0,l.jsx)(o,{sx:i=>({marginTop:"8px",color:i.palette.text[400],...i.typography.body}),children:"You can then connect the exported function to Claude using the MCP protocol."})]})};function ee(e){return(0,l.jsx)(l.Fragment,{children:`
`})}function S(e={}){return(0,l.jsx)(Q,{...e,children:(0,l.jsx)(ee,{...e})})}function M(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var n=b(C());var O=e=>{let{Box:t,ClipboardField:s,Typography:o}=f()||{};return t||k("Box",!0),s||k("ClipboardField",!0),o||k("Typography",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{display:"flex",padding:"8px",backgroundColor:e.theme.palette.text[50],borderRadius:"8px",width:"fit-content",marginBottom:"16px"},children:(0,n.jsx)("img",{src:"https://storage.googleapis.com/buildship-app-us-central1/icons/elevenlabs.jpeg",width:"16",height:"16"})}),(0,n.jsx)(o,{sx:r=>({...r.typography.headline6}),children:"ElevenLabs - Setup Guide"}),(0,n.jsx)("a",{href:"https://docs.buildship.com/tools/elevenlabs",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o,{sx:r=>({marginTop:"24px",...r.typography.body}),children:"Documentation \u2197"})}),(0,n.jsx)("a",{href:"https://youtu.be/dH_rPldsUKw",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o,{sx:r=>({marginTop:"8px",...r.typography.body}),children:"Video Tutorial \u2197"})}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"Pre-requisite"}),(0,n.jsxs)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:["Open ",(0,n.jsx)("a",{href:"https://elevenlabs.io/app/conversational-ai/agents",target:"_blank",rel:"noopener noreferrer",children:"ElevenLabs Voice Agents"})," Dashboard, set up a conversation AI Agent and follow the steps below to add the tool to it."]}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"1. Create a new tool"}),(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:`Click the "Add tool" button from the agent's setup section and select "Custom Tool" option from the dropdown menu.`}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"2. Configure the tool"}),(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:'Use the "Webhook" tool type and add the configuration as follows'}),(0,n.jsxs)(t,{sx:{marginTop:"12px",display:"flex",gap:"12px",flexDirection:"column"},children:[(0,n.jsx)(s,{content:e.flowLabel,label:"Copy the Name",description:""}),(0,n.jsx)(s,{content:e.triggerValues?.["config.toolDescription"],label:"Copy the Description",description:"",multiline:!0}),(0,n.jsxs)(t,{children:[(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:"Set the method to POST and copy the following Endpoint URL:"}),(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1,gap:"8px",minHeight:"28px"},children:[(0,n.jsx)(t,{sx:{flex:"1 0 25%"},children:(0,n.jsx)(s,{content:"POST",showCopyButton:!1})}),(0,n.jsx)(t,{sx:{flex:"1 0 75%",width:"75%"},children:(0,n.jsx)(s,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`})})]})]})]}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"3. Set Headers"}),(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:"In the \u201CHeaders\u201D section click \u201CAdd header\u201D. Then, fill it as follows"}),(0,n.jsxs)("ul",{style:{marginTop:"12px",color:e.theme.palette.text[400],...e.theme.typography.body,listStyleType:"none",paddingLeft:"0px"},children:[(0,n.jsx)("li",{children:(0,n.jsx)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"Type \u2192 Value"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"Name \u2192 BUILDSHIP_API_KEY"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"Value \u2192  Copy this from the Tool API Key section on BuildShip (left panel)"})})]}),(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1,gap:"8px",minHeight:"28px"},children:[(0,n.jsx)(t,{sx:{flex:"1 0 50%"},children:(0,n.jsx)(s,{content:"BUILDSHIP_API_KEY"})}),(0,n.jsx)(t,{sx:{flex:"1 0 50%",width:"50%"},children:(0,n.jsx)(s,{content:e.triggerValues?.["config.apiKey"]})})]}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"4. Enable Body Parameters"}),(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:"Enable Body Parameters, click \u201CAdd property\u201D. And copy the data type, identifier and Description for each. Select the value type as \u201CDynamic Variable\u201D."}),te(e.inputs)]})},te=e=>{let{Box:t,ClipboardField:s,Typography:o}=f()||{};t||k("Box",!0),s||k("ClipboardField",!0),o||k("Typography",!0);let r=e?.properties||{},d=Object.entries(r).sort((p,c)=>{let a=p[1].buildship?.index??1/0,u=c[1].buildship?.index??1/0;return a-u});return(0,n.jsxs)(t,{sx:{marginTop:"12px"},children:[(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1},children:[(0,n.jsx)(t,{sx:{flex:"1 0 25%"},children:(0,n.jsx)(o,{sx:p=>({color:p.palette.text[400],...p.typography.body}),children:"Data type"})}),(0,n.jsx)(t,{sx:{flex:"1 0 75%",width:"75%"},children:(0,n.jsx)(o,{sx:p=>({color:p.palette.text[400],...p.typography.body}),children:"Identifier"})})]}),d.map(([p,c])=>(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"column",flexGrow:1,gap:"2px",marginBottom:"8px"},children:[(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1,gap:"8px",minHeight:"28px"},children:[(0,n.jsx)(t,{sx:{flex:"1 0 20%"},children:(0,n.jsx)(s,{content:c.type.charAt(0).toUpperCase()+c.type.slice(1),showCopyButton:!1})}),(0,n.jsx)(t,{sx:{flex:"1 0 75%",width:"75%"},children:(0,n.jsx)(s,{content:p})})]}),(0,n.jsx)(t,{sx:{flex:"1",width:"100%"},children:(0,n.jsx)(s,{content:c.description||"[No description provided]",description:"",multiline:!1})})]},p))]})};function k(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var h=b(C());var L=b(v());var B=e=>{let{Box:t,ClipboardTextArea:s,CodeMirror:o,CodeSamples:r,CopyButton:d,Typography:p}=f()||{};t||_("Box",!0),s||_("ClipboardTextArea",!0),o||_("CodeMirror",!0),r||_("CodeSamples",!0),d||_("CopyButton",!0),p||_("Typography",!0);let c=(0,L.useMemo)(()=>JSON.stringify(e.toolFlowToOpenApi([e.flow],e.host),null,2),[e.flow,e.host]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{sx:a=>({color:a.palette.text[900],...a.typography.headline6}),children:"Default Setup Guide"}),(0,h.jsx)(p,{sx:a=>({color:a.palette.text[400],marginTop:"4px",...a.typography.body}),children:"Each agent platform has its own setup process. Please select your specific agent from the options above. Below you'll find universal specifications that work across all agent platforms."}),(0,h.jsx)(p,{sx:a=>({color:a.palette.text[900],marginTop:"24px",...a.typography.body}),children:"OpenAPI Specification"}),(0,h.jsxs)(t,{sx:{position:"relative"},children:[(0,h.jsx)(t,{sx:{marginTop:"4px",maxHeight:"600px",overflow:"auto"},children:(0,h.jsx)(o,{value:c,onChange:()=>{},extensions:[e.cm.extensions.json()],codemirrorProps:{readOnly:!0,editable:!1},wrapLines:!0,containerSx:{"& .cm-editor":{borderRadius:"4px",backgroundColor:a=>a.palette.text[50]}}})}),(0,h.jsx)(d,{content:c,sx:{position:"absolute",right:16,top:8}})]}),(0,h.jsx)(p,{sx:a=>({color:a.palette.text[900],marginTop:"24px",...a.typography.body}),children:"Schema Definitions"}),(0,h.jsx)(p,{sx:a=>({marginTop:"4px",color:a.palette.text[400],...a.typography.body}),children:"These JSON schemas define the expected input parameters and output formats for your tool. Use them to ensure proper data formatting and validation."}),(0,h.jsx)(r,{samples:[{code:JSON.stringify(e.simplifySchema(e.inputs),null,2),label:"Tool Input Schema",language:"json"},{code:JSON.stringify(e.simplifySchema(e.output),null,2),label:"Tool Output Schema",language:"json"}]}),(0,h.jsx)(p,{sx:a=>({marginTop:"24px",color:a.palette.text[900],...a.typography.body}),children:"API Endpoint"}),(0,h.jsxs)(p,{sx:a=>({marginTop:"4px",color:a.palette.text[400],...a.typography.body}),children:["To invoke this tool, send a POST request to the endpoint below with your input parameters. Include your ",(0,h.jsx)("code",{children:"BUILDSHIP_API_KEY"})," in the request header for authentication."]}),(0,h.jsx)(s,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`,label:"",description:""})]})};function _(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=b(C());var F=e=>{let{ClipboardTextArea:t,CodeSamples:s,Typography:o}=f()||{};t||P("ClipboardTextArea",!0),s||P("CodeSamples",!0),o||P("Typography",!0);let r=e.inputs.properties||{},d=(a=2)=>{let u=" ".repeat(a);return Object.entries(r).map(([g,T])=>{let i=T.type==="number"?"0":'""';return`${u}${g}: ${i}, // ${T.title||g}`}).join(`
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
${Object.entries(e.inputs.properties||{}).map(([a,u])=>`  ${a}: ${u.type==="number"?"number":"string"}; // ${u.title||a}`).join(`
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

main();`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{sx:a=>({...a.typography.headline6}),children:"Node.js Integration"}),(0,m.jsx)(o,{sx:a=>({marginTop:"4px",color:a.palette.text[400],...a.typography.body}),children:"Make sure you have the node-fetch package installed:"}),(0,m.jsx)(t,{content:"npm install node-fetch@2",label:"",description:""}),(0,m.jsx)(o,{sx:a=>({marginTop:"16px",color:a.palette.text[400],...a.typography.body}),children:"Then use this code to call your workflow:"}),(0,m.jsx)(s,{samples:[{code:p,label:"Node.js",language:"js"},{code:c,label:"TypeScript",language:"ts"}]})]})};function P(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var w=b(C());var K=e=>{let{ClipboardTextArea:t,CodeSamples:s,Typography:o}=f()||{};t||$("ClipboardTextArea",!0),s||$("CodeSamples",!0),o||$("Typography",!0);let r=e.inputs.properties||{},d=()=>Object.entries(r).map(([c,a])=>{let u=a.type==="number"?"0":'""';return`    "${c}": ${u}, # ${a.title||c}`}).join(`
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
    main()`;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o,{sx:c=>({...c.typography.headline6}),children:"Python Integration"}),(0,w.jsx)(o,{sx:c=>({marginTop:"4px",color:c.palette.text[400],...c.typography.body}),children:"Make sure you have the requests library installed:"}),(0,w.jsx)(t,{content:"pip install requests",label:"",description:""}),(0,w.jsx)(o,{sx:c=>({marginTop:"16px",color:c.palette.text[400],...c.typography.body}),children:"Then use this code to call your workflow:"}),(0,w.jsx)(s,{samples:[{code:p,label:"Python",language:"js"}]})]})};function $(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var y=b(C());var we=b(v());var X=e=>{let{ClipboardField:t,CodeSamples:s,CodeViewer:o,CopyButton:r,Typography:d}=f()||{};t||j("ClipboardField",!0),s||j("CodeSamples",!0),o||j("CodeViewer",!0),r||j("CopyButton",!0),d||j("Typography",!0);let p=e.inputs.properties||{},c=(a=2)=>{let u=" ".repeat(a);return Object.entries(p).map(([g,T])=>{let i=T.type==="number"?"0":'""';return`${u}${g}: ${i}, // ${T.title||g}`}).join(`
	`)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d,{sx:a=>({...a.typography.headline6,marginBottom:"16px"}),children:"Vibe Coder - Setup Guide"}),(0,y.jsx)(t,{label:"Endpoint URL",content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`}),(0,y.jsx)(d,{sx:{marginTop:"16px"},children:"Code Snippet"}),(0,y.jsx)(d,{sx:a=>({color:a.palette.text[400],marginTop:"4px"}),children:"Copy and paste the code snippet to your app or website."}),(0,y.jsx)("div",{style:{marginTop:"16px"},children:(0,y.jsx)(s,{samples:[{code:`/**
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

executeExample();`,language:"js",label:"JavaScript"}]})}),(()=>{let a=`Create an intuitive & responsive webapp using the given endpoint and the example inputs

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
`;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d,{sx:{marginTop:"16px"},children:"AI Handoff"}),(0,y.jsx)(d,{sx:u=>({color:u.palette.text[400],marginTop:"4px"}),children:"Paste the following prompt into your AI App builder to generate the frontend by connecting to your BuildShip API endpoint and creating the UI you need."}),(0,y.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",margin:"16px 0 "},children:[(0,y.jsx)(d,{children:"Prompt"}),(0,y.jsx)(r,{variant:"expanded",label:"Copy prompt",content:a})]}),(0,y.jsx)(o,{copy:!1,code:a})]})})()]})};function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var oe=void 0,W=e=>{let{Select:t,Typography:s}=f()||{};t||U("Select",!0),s||U("Typography",!0);let[o,r]=e.useState("generic-agent");function d(p){return p.replace(/(?:^\w|[A-Z]|\b\w)/g,function(c,a){return a===0?c.toLowerCase():c.toUpperCase()}).replace(/\s+/g,"")}return(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"22px"},children:[(0,x.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.modal,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[(0,x.jsx)(s,{sx:p=>({marginBottom:"8px",color:p.palette.text[900]}),children:"Select your agent builder"}),(0,x.jsx)(t,{value:o,onChange:p=>r(p.target.value),options:[{value:"vibe-coder",render:"Vibe Coder Agent"},{value:"11labs",render:"ElevenLabs"},{value:"claude",render:"Claude Desktop (MCP Server)"},{value:"nodejs",render:"Node.js Fetch Implementation"},{value:"python",render:"Python Requests Implementation"},{value:"generic-agent",render:"Default Setup Guide"}]})]}),(0,x.jsx)("div",{style:{marginTop:"16px"}}),(0,x.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.modal,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[o==="vibe-coder"&&(0,x.jsx)(X,{...e,openApiSpec:JSON.stringify(e.toolFlowToOpenApi([e.flow],e.host),null,2)}),o==="claude"&&(0,x.jsx)(S,{flowLabel:d(e.flowLabel??""),...e}),o==="11labs"&&(0,x.jsx)(O,{...e}),o==="generic-agent"&&(0,x.jsx)(B,{...e}),o==="nodejs"&&(0,x.jsx)(F,{...e}),o==="python"&&(0,x.jsx)(K,{...e})]})]})};function Y(e){return(0,x.jsx)(W,{...e})}function H(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(Y,{...e})}):Y(e)}function U(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}return Z(re);})();
;return Component;