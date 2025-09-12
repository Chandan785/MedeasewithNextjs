"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

function BasicInfoPage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  return (
    <div className="p-6 bg-gray-50 dark:bg-neutral-900 min-h-screen">
      <h1 className="text-3xl font-bold underline mb-6 text-blue-600">
        Basic Info Page
      </h1>

      <div className="max-w-lg p-6 rounded-lg shadow bg-white dark:bg-neutral-800">
        <p className="text-lg">
          <strong>User ID:</strong> {params.id}
        </p>
        <p className="text-lg">
          <strong>Name:</strong> {name}
        </p>
        <p className="text-lg">
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}

export default BasicInfoPage;
