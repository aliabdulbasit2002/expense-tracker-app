import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../features/ExpenceSlice";

const Expense = ({ title, amount, category, timeStamp, id }) => {
  const dispatch = useDispatch();

  return (
    <Box
      bg="whatsapp.400"
      color="gray.800"
      maxW="300px"
      p={3}
      borderRadius={10}
      borderTop="10px solid"
      borderTopColor="whatsapp.800"
    >
      <Text fontSize={13}>Date Purchased: {timeStamp}</Text>
      <Text fontWeight="bold">
        Item:{" "}
        <Text as="span" fontWeight="medium">
          {title}
        </Text>
      </Text>
      <Text fontWeight="bold">
        Amount:{" "}
        <Text as="span" fontWeight="medium">
          {amount}
        </Text>
      </Text>
      <Text fontWeight="bold">
        Category:{" "}
        <Text as="span" fontWeight="medium">
          {category}
        </Text>
      </Text>
      <ButtonGroup mt={3}>
        <Button>Edit</Button>
        <Button onClick={() => dispatch(deleteExpense(id))}>Delete</Button>
      </ButtonGroup>
    </Box>
  );
};

export default Expense;
