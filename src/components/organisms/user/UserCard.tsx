import { memo, VFC } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w="200px"
      h="200px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="100px"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="large" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm">{fullName}</Text>
      </Stack>
    </Box>
  );
});
