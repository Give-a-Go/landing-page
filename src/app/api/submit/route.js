import axios from "axios";

export async function POST(request) {
  try {
    // Parse the incoming JSON data from the request body
    const incomingData = await request.json();

    // Define the required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "context",
      "email_notifications",
      "whatsapp_notifications",
    ];

    // Create a new object with only the required fields
    const formData = {};
    requiredFields.forEach((field) => {
      formData[field] = incomingData[field] || ""; // Use the incoming data or default to an empty string
    });

    // Send data to Google Sheets via Google Apps Script
    const googleAppsScriptUrl =
      "https://script.google.com/macros/s/AKfycbxy-eZ5-sNDVoM_eOyYKedlNlI00Lmcn0KSNom95PuvWieq3au77-b1uCEZ3M59KXka/exec";
    const googleResponse = await axios.post(googleAppsScriptUrl, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Google Sheets response:", googleResponse.data);

    // Send a notification to Slack
    const slackText = `New Member joined! 🚀
    \n${formData.name} [${formData.email}]
    \n${formData.context}`;

    await sendToSlack(slackText);

    // Return a success response
    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error submitting form:", error);

    // Return an error response
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

async function sendToSlack(text) {
  //   const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL; // Use environment variable for the webhook URL
  const slackWebhookUrl =
    "https://hooks.slack.com/services/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"; // Use environment variable for the webhook URL

  try {
    const response = await axios.post(slackWebhookUrl, {
      text: text,
    });

    console.log("Slack notification sent:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending Slack message:", error);
    throw error;
  }
}
