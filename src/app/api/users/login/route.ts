import { connectToDatabase } from "@/dbConfig/dbconfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectToDatabase();

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase(); // only connects once (cached)

    const { Username, email, password } = await request.json();

    let user = await User.findOne({ Username });
    if (!user) {   
      user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json(
          { error: "Invalid username or email" },
          { status: 401 }
        );
      }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    // ✅ create token payload
    const tokenData = { 
      Username: user.Username, 
      email: user.email, 
      id: user._id 
    };

    // ✅ generate JWT token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1h" });

    // ✅ build response & set cookie
    const response = NextResponse.json(
      { message: "Login successful", success: true },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,           // middleware can read it
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",                // available for all routes
    });

    return response;

  } catch (error: any) {
    console.error("❌ Error during login:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
