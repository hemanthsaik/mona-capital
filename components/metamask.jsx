import Link from "next/link";
import React from "react";

const Metamask = () => {
  return (
    <div className="flex min-h-screen flex-col gap-3 justify-center items-center">
      <p>
        It apprears that Metamask is not installed, <br />
        Download <Link href="https://metamask.io/">Metamask</Link> to continue.
      </p>
    </div>
  );
};

export default Metamask;
