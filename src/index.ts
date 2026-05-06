import env from "@/configs/env";
import app from "@/app";
import connectDB from "@/configs/db";

app.listen(env.PORT, async () => {
  await connectDB();
  console.log(`Server is listening at http://localhost:${env.PORT}`);
});
