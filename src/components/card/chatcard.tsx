import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from "@nextui-org/react";
import React from "react";
import GroupTotalAvatar from "../avatar/grouptotalavatar";
import ButtonGroup from "../button/buttongroup";

export default function ChatCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="col-span-4 md:col-span-2">
      <CardHeader className="grid grid-cols-4">
        <GroupTotalAvatar />
        <div className=" col-span-2 text-center">
          <h4 className="font-bold text-large">Group Chat 😎</h4>
          <small className="text-default-500">last seen 34 minute ago</small>
        </div>

        <ButtonGroup />
      </CardHeader>
      <Divider />
      <CardBody className="px-3 py-0 text-small text-default-400 h">

      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
