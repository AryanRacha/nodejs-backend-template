import db from "@/db";

const connectDB = async () => {
  try {
    await db.execute(`SELECT 1`);
    console.log("DB Connected!");
  } catch (error) {
    console.error("DB CONNECTION ERROR: ", error);
    process.exit(1);
  }
};

export default connectDB;
