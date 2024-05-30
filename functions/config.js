import dotenv from 'dotenv';
dotenv.config();

export default async (event, context) => {

  try {
  const firebaseConfig =  {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  const responseBody = JSON.stringify(firebaseConfig);


  const response = new Response(responseBody, {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response;

  } catch (error) {
    console.error("Error fetching Firebase config:", error);
    const errorResponse = new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });

    return errorResponse;
  }

  };