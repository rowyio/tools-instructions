var Component=(()=>{var B=Object.create;var x=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var K=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty;var j=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports),Y=(o,t)=>{for(var l in t)x(o,l,{get:t[l],enumerable:!0})},S=(o,t,l,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of O(t))!V.call(o,p)&&p!==l&&x(o,p,{get:()=>t[p],enumerable:!(r=X(t,p))||r.enumerable});return o};var f=(o,t,l)=>(l=o!=null?B(K(o)):{},S(t||!o||!o.__esModule?x(l,"default",{value:o,enumerable:!0}):l,o)),q=o=>S(x({},"__esModule",{value:!0}),o);var b=j((W,I)=>{I.exports=_jsx_runtime});var D=j((Q,_)=>{_.exports=React});var z={};Y(z,{AgentSelector:()=>A,default:()=>F,frontmatter:()=>N});var s=f(b());var{useMDXComponents:u}=MdxJsReact;var i=f(b());var M=f(D());var E=o=>{let{ClipboardField:t,CodeSamples:l,CodeViewer:r,CopyButton:p,Select:g,Typography:a}=u()||{};t||m("ClipboardField",!0),l||m("CodeSamples",!0),r||m("CodeViewer",!0),p||m("CopyButton",!0),g||m("Select",!0),a||m("Typography",!0);let c=o.toolkit?.tools?.[0],[h,v]=(0,M.useState)(c?.id),w=(d={},y=2)=>{let e=" ".repeat(y);return Object.entries(d).map(([T,k])=>{let U=k.type==="number"?"0":'""';return`${e}${T}: ${U}, // ${k.title||T}`}).join(`
	`)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{sx:d=>({...d.typography.headline6,marginBottom:"16px"}),children:"Vibe Coder - Setup Guide"}),(0,i.jsx)(a,{children:"Endpoint URL"}),(0,i.jsxs)(a,{sx:d=>({color:d.palette.text[400],marginTop:"4px"}),children:["Each tool has a unique URL in the format ",(0,i.jsx)("span",{style:{fontFamily:"monospace"},children:"executeTool/{toolkitID}/{toolID}"}),". Select a specific tool from the dropdown below to view its complete endpoint URL."]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"8px",marginTop:"8px"},children:[(0,i.jsx)(g,{options:o.toolkit?.tools.map(d=>({value:d.id,render:d.name})),sx:{width:"150px"},value:h,onChange:d=>{v(d.target.value)}}),(0,i.jsx)("div",{style:{overflow:"hidden"},children:(0,i.jsx)(t,{content:`${o.host}/executeTool/${o.toolkit?.id}/${h}`})})]}),(0,i.jsx)(a,{sx:{marginTop:"16px"},children:"Code Snippet"}),(0,i.jsx)(a,{sx:d=>({color:d.palette.text[400],marginTop:"4px"}),children:"Copy and paste the code snippet to your app or website."}),(0,i.jsx)("div",{style:{marginTop:"16px"},children:(0,i.jsx)(l,{samples:[{code:`/**
 * Function to call a tool using fetch
 * @param {string} toolId - The ID of the tool to call
 * @param {object} params - Input parameters for the tool
 * @returns {Promise<object>} - The tool result
 */
                            
async function callEndpoint( toolId, params ) {
    const url = \`${o.host}/executeTool/${o.toolkit?.id}/\${toolId}\`;
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


// Example usage for ${c?.name??""}
async function executeExample() {
    const params = {
    ${w(c?.inputs)}
    };
  
  try {
    const result = await callWorkflow(${c?.id??"toolId"}, params);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

executeExample();`,language:"js",label:"JavaScript"}]})}),(()=>{let d=`Create an intuitive & responsive webapp using the given endpoint and the example inputs

Rules:
- Use only the inputs given. 
- Include validation for required fields if needed.
- Handle the output properly depending what it returns (string, number, etc) specially in case of returning lists or json outputs.

Create an intuitive & responsive webapp using the given endpoint and the example inputs

Rules:
- Use only the inputs given.
- Include validation for required fields if needed.
- Handle the output properly depending what it returns (string, number, etc) specially in case of returning lists or json outputs.


`;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{sx:{marginTop:"16px"},children:"AI Handoff"}),(0,i.jsx)(a,{sx:y=>({color:y.palette.text[400],marginTop:"4px"}),children:"Paste the following prompt into your AI App builder to generate the frontend by connecting to your BuildShip API endpoint and creating the UI you need."}),(0,i.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",margin:"16px 0 "},children:[(0,i.jsx)(a,{children:"Prompt"}),(0,i.jsx)(p,{variant:"expanded",label:"Copy prompt",content:d})]}),(0,i.jsx)(r,{copy:!1,code:d})]})})()]})};function m(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}var n=f(b());function $(o){return o.replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,l){return l===0?t.toLowerCase():t.toUpperCase()}).replace(/\s+/g,"")}var H=function(t){let{ClipboardField:l,Typography:r}=u()||{};l||R("ClipboardField",!0),r||R("Typography",!0);let[p,g]=t.useState(""),a=t.toolkit?.apiKeys[0],c=t.projectId,h=t.toolkit?.tools?.map(e=>e.id).join(","),v=t.flowLabel,w=a?t.toolkit?.name:"",d=t.toolkit?.id,y=`npx -y buildship-tools create-mcp-server --project ${c} --flows ${h} --apiKey ${a} --toolkitId ${d} --outputFolder ${$(w)} --client claude --token ${p}`;return t.useEffect(()=>{t.getIdToken&&t.getIdToken().then(e=>e&&g(e))},[t.getIdToken]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{display:"flex",padding:"8px",backgroundColor:t.theme.palette.text[50],borderRadius:"8px",width:"fit-content",marginBottom:"16px"},children:(0,n.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/website-a1s39m.appspot.com/o/buildship-app-logos%2Fanthropic.png?alt=media&token=ec0eb8dc-f0d4-4f97-a144-023f1aa8118e",width:"16",height:"16"})}),(0,n.jsx)(r,{sx:e=>({...e.typography.headline6}),children:"Claude MCP - Setup Guide"}),(0,n.jsx)("a",{href:"https://docs.buildship.com/tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(r,{sx:e=>({marginTop:"24px",...e.typography.body}),children:"Documentation \u2197"})}),(0,n.jsx)("a",{href:"https://docs.buildship.com/tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(r,{sx:e=>({marginTop:"8px",...e.typography.body}),children:"Video Tutorial \u2197"})}),(0,n.jsx)(r,{sx:e=>({marginTop:"24px",color:e.palette.text[900],...e.typography.body}),children:"Pre-requisite"}),(0,n.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,n.jsx)("li",{children:(0,n.jsxs)(r,{sx:e=>({color:e.palette.text[400],...e.typography.body}),children:["Ensure you have the ",(0,n.jsx)("a",{href:"https://claude.ai/download",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Claude Desktop"})," app installed"]})}),(0,n.jsx)("li",{children:(0,n.jsx)(r,{sx:e=>({color:e.palette.text[400],...e.typography.body}),children:'Use "Ship" button on top to deploy your workflow'})}),(0,n.jsx)("li",{children:(0,n.jsxs)(r,{sx:e=>({color:e.palette.text[400],...e.typography.body}),children:["You'll need to have ",(0,n.jsx)("a",{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Node.js installed"})," to run the commands"]})})]}),(0,n.jsx)(r,{sx:e=>({color:e.palette.text[400],...e.typography.body}),children:"You can add the MCP tool to your Claude app using one of the following options."}),(0,n.jsx)(r,{sx:e=>({marginTop:"24px",color:e.palette.text[900],...e.typography.body}),children:"Option 1: Hosted on BuildShip"}),(0,n.jsx)(l,{content:y+" --proxy",label:"",description:"Recommended for easy hosted experience. Run the following command from a terminal or command line tool."}),(0,n.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"12px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,n.jsx)("li",{children:(0,n.jsxs)(r,{sx:e=>({color:e.palette.text[400],...e.typography.body}),children:["After the command updates your Claude config, ",(0,n.jsx)("strong",{children:"restart the Claude Desktop app"})," (if it's open) to load the MCP tool added"]})}),(0,n.jsx)("li",{children:(0,n.jsx)(r,{sx:e=>({marginTop:"12px",color:e.palette.text[400],...e.typography.body}),children:"To test, Ask Claude to use the tool. Claude will ask for permission. Once you allow it, the tool will run and show the result."})})]}),(0,n.jsx)(r,{sx:e=>({marginTop:"12px",color:e.palette.text[400],...e.typography.body}),children:"You'll see it successfully updated Claude config when you see a 'Tool' icon within Claude Chat"}),(0,n.jsx)("img",{src:"https://storage.googleapis.com/buildship-2vqhlv-us-central1/tool-trigger-assets/claude-tool.png",width:"100%",height:"auto",style:{marginTop:"16px",borderRadius:"4px"}}),(0,n.jsx)(r,{sx:e=>({marginTop:"8px",color:e.palette.text[400],...e.typography.body}),children:"Note: Since the tool is hosted on BuildShip, it will use your BuildShip credits when executed."}),(0,n.jsx)(r,{sx:e=>({marginTop:"24px",color:e.palette.text[900],...e.typography.body}),children:"Option 2: Self hosted"}),(0,n.jsx)(r,{sx:e=>({marginTop:"4px",color:e.palette.text[400],...e.typography.body}),children:"Run the following command \u2014 it will:"}),(0,n.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,n.jsx)("li",{children:(0,n.jsx)(r,{sx:e=>({color:e.palette.text[400],...e.typography.body}),children:"Convert the workflow into a JavaScript function"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r,{sx:e=>({color:e.palette.text[400],...e.typography.body}),children:"Download the function to your local machine"})})]}),(0,n.jsx)(l,{content:y,label:"",description:""}),(0,n.jsx)(r,{sx:e=>({marginTop:"8px",color:e.palette.text[400],...e.typography.body}),children:"You can then connect the exported function to Claude using the MCP protocol."})]})};function J(o){return(0,n.jsx)(n.Fragment,{children:`
`})}function C(o={}){return(0,n.jsx)(H,{...o,children:(0,n.jsx)(J,{...o})})}function R(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}var N=void 0,A=o=>{let{Select:t,Typography:l}=u()||{};t||L("Select",!0),l||L("Typography",!0);let[r,p]=o.useState("vibe-coder");function g(a){return a.replace(/(?:^\w|[A-Z]|\b\w)/g,function(c,h){return h===0?c.toLowerCase():c.toUpperCase()}).replace(/\s+/g,"")}return(0,s.jsxs)("div",{children:[(0,s.jsx)(l,{sx:a=>({marginBottom:"8px",color:a.palette.text[900]}),children:"Select your agent builder"}),(0,s.jsx)(t,{value:r,onChange:a=>p(a.target.value),options:[{value:"vibe-coder",render:"Vibe Coder Agent"},{value:"11labs",render:"ElevenLabs"},{value:"claude",render:"Claude Desktop (MCP Server)"},{value:"nodejs",render:"Node.js Fetch Implementation"},{value:"python",render:"Python Requests Implementation"},{value:"generic-agent",render:"Default Setup Guide"}]}),(0,s.jsx)("div",{style:{backgroundColor:o.theme.palette.text[100],height:"1px",margin:"16px 0"}}),(0,s.jsx)("div",{style:{marginTop:"16px"}}),r==="vibe-coder"&&(0,s.jsx)(E,{...o}),r==="claude"&&(0,s.jsx)(C,{...o})]})};function P(o){return(0,s.jsx)(A,{...o})}function F(o={}){let{wrapper:t}={...u(),...o.components};return t?(0,s.jsx)(t,{...o,children:(0,s.jsx)(P,{...o})}):P(o)}function L(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}return q(z);})();
;return Component;