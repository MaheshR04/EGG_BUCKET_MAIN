// backend/seedAdmin.js
import "dotenv/config";
import { db } from "./config/firebase.js";
import bcrypt from "bcryptjs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
  console.log("🥚 Egg Bucket - Initial Admin Seed Script 🥚");
  console.log("-----------------------------------------");

  try {
    const username = (await question("Enter Admin Username: ")).trim();
    if (!username) {
      console.error("❌ Username cannot be empty");
      process.exit(1);
    }

    const password = await question("Enter Admin Password: ");
    if (!password || password.length < 4) {
      console.error("❌ Password must be at least 4 characters long");
      process.exit(1);
    }

    const fullName = (await question("Enter Full Name (optional): ")).trim();
    const phone = (await question("Enter Phone Number (optional): ")).trim();

    console.log("\nHashing password...");
    const hashed = await bcrypt.hash(password, 10);

    const adminData = {
      username: username,
      password: hashed,
      fullName: fullName || "Administrator",
      phone: phone || "",
      role: "Admin",
      roles: ["admin"],
      createdAt: new Date(),
    };

    console.log(`Creating Admin user '${username}' in Firebase Firestore 'admin' collection...`);
    // Use lowercased or exact username as doc ID. The login system supports fallback for case mismatches.
    await db.collection("admin").doc(username.toLowerCase()).set(adminData);

    console.log("=========================================");
    console.log("✅ SUCCESS: Admin user created successfully!");
    console.log(`   Username: ${username}`);
    console.log("   Role: Admin");
    console.log("=========================================");
  } catch (error) {
    console.error("❌ Error seeding Admin user:", error.message);
  } finally {
    rl.close();
  }
}

main();
