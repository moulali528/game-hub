import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton: React.FC = () => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Skeleton height={"210px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
