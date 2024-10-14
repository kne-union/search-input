
# search-input


### 描述

停止输入后执行搜索


### 安装

```shell
npm i --save @kne/search-input
```

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _SearchInput(@kne/current-lib_search-input)[import * as _SearchInput from "@kne/search-input"],antd(antd),(@kne/current-lib_search-input/dist/index.css)

```jsx
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

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
|     |    |    |     |

