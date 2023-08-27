/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Library, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const constants = [
  {
    title: "Create your first playlist",
    description: "It's easy, we'll help you",
    btn: "Create playlist",
  },
  {
    title: "Let's find some podcast to follow",
    description: "We'll keep you updated on new episodes",
    btn: "Browse podcasts",
  },
];

const Sidebar2 = () => {
  return (
    <div className="h-5/6 flex justify-between bg-primary rounded-lg text-white  px-4 space-y-4 flex-col pl-4 py-4 ">
      <div className="grid gap-8 ">
        <Link
          href={"/#"}
          className="gap-2 items-center hover:bg-secondary/20 flex pl-2 pr-6 rounded-lg  py-2"
        >
          <Library /> <span className="flex-1"> Library </span>
          <span>
            {" "}
            <Plus className="opacity-40 hover:rounded-full hover:opacity-100  hover:bg-secondary/20" />
          </span>
        </Link>
        <div className="space-y-4">
          {constants.map((item, index) => (
            <div key={index}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>{item.btn}</Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button
          variant={"outline"}
          className="flex gap-2 rounded-full items-center"
        >
          <Globe size={16} /> English
        </Button>
      </div>
    </div>
  );
};

export default Sidebar2;
