import mongoose from "mongoose";

// ✅ لازم تضيف اسم الداتابيز في الآخر (هنا مثلاً lavida)
const MONGODB_URI ="mongodb+srv://ea37645520_db_user:4R7uEhp1TGv9htCr@cluster0.i00yerx.mongodb.net/stella";

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false, // 🚀 يمنع مشاكل إعادة الاتصال
    }).then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    if (process.env.NODE_ENV !== "production") {
      console.log("✅ MongoDB connected");
    }
  } catch (err) {
    cached.promise = null;
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }

  return cached.conn;
}
