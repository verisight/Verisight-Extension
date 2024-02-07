const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const endpoint = "https://verisightgptapi2.openai.azure.com/" ;
const azureApiKey = "f57c00647bb74348ad82ccec70fcc14c" ;

//Take the content from the MainPage.tsx and put it here

const prompt = ["Summarise this content:", "The following is a summary of the main points in the article:"];

async function main() {
  console.log("== Get completions Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentId = "Verisight-gpt-35-turbo-0301";
  const result = await client.getCompletions(deploymentId, prompt);

  for (const choice of result.choices) {
    console.log(choice.text);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };