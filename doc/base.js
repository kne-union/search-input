const { default: SearchInput } = _SearchInput;
const { Flex } = antd;

const BaseExample = () => {
  return <Flex vertical gap={8}>
    <SearchInput />
    <SearchInput simple />
    <SearchInput showSearchButton />
  </Flex>;
};

render(<BaseExample />);
