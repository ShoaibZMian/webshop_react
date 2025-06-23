import Link from "next/link";
import { Button } from "../ui/button";
import { Code } from "lucide-react";



function Logo() {
  return <Button size='icon' asChild>
    <Link href="/">
      <Code className="w-6 h-6" />
    </Link>
  </Button>;
}
export default Logo;
