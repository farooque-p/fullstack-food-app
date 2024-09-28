import app from "./app.js";
import connectDatabase from "./config/db.js";

connectDatabase();
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
