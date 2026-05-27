// backend/seedAllUsers.js
import "dotenv/config";
import { db } from "./config/firebase.js";
import bcrypt from "bcryptjs";

async function main() {
  console.log("🥚 Egg Bucket - Seeding Multiple User Roles 🥚");
  console.log("---------------------------------------------");

  try {
    // 1. Create Supervisor
    const supervisorUsername = "supervisor";
    const supervisorPassword = "Supervisor@4453";
    const supervisorHash = await bcrypt.hash(supervisorPassword, 10);
    const supervisorData = {
      username: supervisorUsername,
      password: supervisorHash,
      zone: 1, // Store as numeric ID for supervisor validation
      role: "Supervisor",
      roles: ["supervisor"],
      fullName: "Test Supervisor",
      phone: "1234567890",
      createdAt: new Date(),
    };
    console.log("Creating Supervisor user...");
    await db.collection("supervisors").doc(supervisorUsername).set(supervisorData);
    console.log(`✅ Supervisor created! Username: ${supervisorUsername} | Password: ${supervisorPassword}`);

    // 2. Create Data Agent
    const agentUsername = "dataagent";
    const agentPassword = "Dataagent@4453";
    const agentHash = await bcrypt.hash(agentPassword, 10);
    const dataAgentData = {
      username: agentUsername,
      password: agentHash,
      fullName: "Test Data Agent",
      phone: "1234567891",
      role: "DataAgent",
      roles: ["dataagent"],
      zone: "Zone 1", // Data agents check this zone
      createdAt: new Date(),
    };
    console.log("Creating Data Agent user...");
    await db.collection("dataagents").doc(agentUsername).set(dataAgentData);
    console.log(`✅ Data Agent created! Username: ${agentUsername} | Password: ${agentPassword}`);

    // 3. Create Viewer
    const viewerUsername = "viewer";
    const viewerPassword = "Viewer@4453";
    const viewerHash = await bcrypt.hash(viewerPassword, 10);
    const viewerData = {
      username: viewerUsername,
      password: viewerHash,
      fullName: "Test Viewer",
      phone: "1234567892",
      role: "Viewer",
      roles: ["viewer"],
      createdAt: new Date(),
    };
    console.log("Creating Viewer user...");
    await db.collection("viewers").doc(viewerUsername).set(viewerData);
    console.log(`✅ Viewer created! Username: ${viewerUsername} | Password: ${viewerPassword}`);

    console.log("=============================================");
    console.log("🎉 SUCCESS: All roles successfully seeded!");
    console.log("=============================================");
  } catch (error) {
    console.error("❌ Error seeding roles:", error.message);
  }
}

main();
