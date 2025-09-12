import { getdatafromtoken } from "@/helper/getdatafromtoken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import connectToDatabase from "@/dbConfig/dbconfig";

// Ensure DB connection
connectToDatabase();

export async function GET(request: NextRequest) {
  try {
    // ✅ Extract userId from token
    const userId = getdatafromtoken(request);

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Invalid or missing token" },
        { status: 401 }
      );
    }

    // ✅ Fetch all user details except sensitive ones
    const user = await User.findById(userId).select("-password -__v");

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // ✅ Success response with full user data
    return NextResponse.json(
      {
        success: true,
        message: "User data fetched successfully",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role || "user",
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          // add more fields if you have in schema like: phone, address, avatar, etc.
        },
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("❌ Error fetching user data:", error.message || error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
