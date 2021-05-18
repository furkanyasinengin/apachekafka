const  {Kafka}  = require("kafkajs");

createTopic();

async function createTopic() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_docker",
      brokers: ["kafka:9092"]
    });

    const admin = kafka.admin();
    console.log("Connecting...");
    
    await admin.connect();
    console.log("Connected, topic creating..");
    
    await admin.createTopics({
      topics: [
        {
          topic: "Logs",
          numPartitions: 1
        }
      ]
    });
    console.log("Topic created...");
    await admin.disconnect();
  } 
  
  catch (error) {
    console.log("Error",error);
  } 
   finally {
     process.exit(0);
  }
}