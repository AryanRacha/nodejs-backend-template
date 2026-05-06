import app from "@/app";
import connectDB from "@/configs/db";

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is listening at http://localhost:${PORT}`);
});
