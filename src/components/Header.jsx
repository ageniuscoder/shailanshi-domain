import { Crown } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="py-8 px-4 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-4">
          <Crown className="text-yellow-400 animate-pulse" size={48} />
        </div>
      </div>
    </header>
  );
};

export default Header;
