import { AddIcon } from "@chakra-ui/icons";
import { HStack, Button, useDisclosure } from "@chakra-ui/react";
import NewTaskModal from "./NewTaskModal";

export const NewTaskBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onOpenNewTaskModalHandler = () => {
    onOpen();
  };
  const onCloseNewTaskModalHandler = () => {
    onClose();
  };
  return (
    <>
      <HStack
        onClick={onOpenNewTaskModalHandler}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          colorScheme="primary"
          backgroundColor="primary.600"
          leftIcon={<AddIcon />}
          fontSize="14px"
        >
          تسک جدید
        </Button>
      </HStack>

      <NewTaskModal
        isShowModal={isOpen}
        onCloseModal={onCloseNewTaskModalHandler}
      />
    </>
  );
};
