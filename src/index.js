import React from 'react';
import { Input, Space, Button } from 'antd';
import classnames from 'classnames';
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import style from './style.module.scss';

const SearchInput = p => {
  const { value, debounce, onSearch, simple, showSearchButton, placeholder, className, ...props } = Object.assign(
    {},
    {
      showSearchButton: false,
      debounce: 500,
      onSearch: () => {}
    },
    p
  );
  const [state, setState] = useState(value);
  const valueRef = useRef(value);
  const debouncedFunc = useDebouncedCallback(onSearch, debounce);
  useEffect(() => {
    if (value !== valueRef.current) {
      setState(value);
      valueRef.current = value;
    }
  }, [value]);

  return (
    <Space.Compact
      className={classnames(className, style['search-input'], {
        [style['is-simple']]: simple
      })}
    >
      <Input
        {...props}
        allowClear
        value={state}
        placeholder={placeholder}
        onChange={e => {
          const value = e.target.value;
          valueRef.current = value;
          setState(value);
          debouncedFunc(value);
        }}
        prefix={<SearchOutlined />}
      />
      {showSearchButton && (
        <Button
          type="primary"
          onClick={() => {
            debouncedFunc(value);
          }}
        >
          <SearchOutlined />
        </Button>
      )}
    </Space.Compact>
  );
};

export default SearchInput;
