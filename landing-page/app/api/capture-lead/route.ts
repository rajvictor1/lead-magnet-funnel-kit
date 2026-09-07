import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const timestamp = new Date().toISOString();
    const dataDir = "/tmp";
    const filePath = path.join(dataDir, "leads.csv");

    // Ensure data directory exists
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch {
      // ignore if exists
    }

    // Check if file exists
    let fileExists = false;
    try {
      await fs.access(filePath);
      fileExists = true;
    } catch {
      fileExists = false;
    }

    // Write header if new file
    const row = `"${normalizedEmail}","${timestamp}","linkedin-templates"\n`;
    if (!fileExists) {
      await fs.writeFile(filePath, "email,captured_at,source\n", "utf-8");
    }
    await fs.appendFile(filePath, row, "utf-8");

    // Optional: email service integration can go here
    // Example: await sendWelcomeEmail(normalizedEmail);

    return NextResponse.json({ success: true, message: "Lead captured" });
  } catch (error) {
    console.error("Capture lead error:", error);
    return NextResponse.json({ error: "Failed to capture lead" }, { status: 500 });
  }
}
