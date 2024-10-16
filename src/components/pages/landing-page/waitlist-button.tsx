"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui-components/placeholders-and-vanish-input";

export function WaitlistButton() {
  const placeholders = [
    "Level up your tech team",
    "Join the waitlist",
    "Hire Africa's Best Tech Talents",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col justify-center  items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
