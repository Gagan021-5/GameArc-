import { app } from "./utils/app.js"; 
import connection from "./db/data.js";


try {
  await connection();
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at port ${process.env.PORT || 3000}`);
  });
} catch (e) {
  console.log("Error during connection or server startup:", e);
}



