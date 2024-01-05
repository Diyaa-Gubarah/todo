import { Text } from "../../../components";
import { useTodos } from "../../../hooks";

type Props = {};

const ErrorText = ({}: Props) => {
  const { error } = useTodos();

  return (
    error !== null && (
      <Text fontSize="sm" color="accent">
        {error}
      </Text>
    )
  );
};

export default ErrorText;
