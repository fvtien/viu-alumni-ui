import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

import { mockUser } from "./mock/mock_user";
import "./user.component.scss";

const User = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState(0);
  const refSearchInput = useRef();

  const getColumnSearchProps = (
    dataIndex,
    searchInput,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn
  ) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => (searchInput = node)}
          placeholder={"Nhập nội dung cần tìm"}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(
                selectedKeys,
                confirm,
                dataIndex,
                setSearchText,
                setSearchedColumn
              )
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Tìm
          </Button>
          <Button
            onClick={() =>
              handleReset(
                clearFilters,
                setSearchText,
                setSearchText,
                setSearchedColumn
              )
            }
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (
    selectedKeys,
    confirm,
    dataIndex,
    setSearchText,
    setSearchedColumn
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters, setSearchText) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "Mã sinh viên",
      dataIndex: "user_id",
      key: "user_id",
      ...getColumnSearchProps(
        "user_id",
        refSearchInput,
        searchText,
        setSearchText,
        searchedColumn,
        setSearchedColumn
      ),
    },
    {
      title: "Họ Tên",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps(
        "name",
        refSearchInput,
        searchText,
        setSearchText,
        searchedColumn,
        setSearchedColumn
      ),
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: urlImage => <img src={urlImage} alt={urlImage} />,
    },
    {
      title: "Ngày sinh",
      dataIndex: "data_birth",
      key: "data_birth",
    },
    {
      title: "Khoa",
      dataIndex: "faculty",
      key: "faculty",
      ...getColumnSearchProps(
        "faculty",
        refSearchInput,
        searchText,
        setSearchText,
        searchedColumn,
        setSearchedColumn
      ),
    },
    {
      title: "Chuyên ngành",
      dataIndex: "majors",
      key: "majors",
      ...getColumnSearchProps(
        "majors",
        refSearchInput,
        searchText,
        setSearchText,
        searchedColumn,
        setSearchedColumn
      ),
    },
    {
      title: "Lĩnh vực làm việc",
      dataIndex: "filed_work",
      key: "filed_work",
      ...getColumnSearchProps(
        "filed_work",
        refSearchInput,
        searchText,
        setSearchText,
        searchedColumn,
        setSearchedColumn
      ),
    },
    {
      title: "Lớp",
      dataIndex: "user_class",
      key: "user_class",
      ...getColumnSearchProps(
        "user_class",
        refSearchInput,
        searchText,
        setSearchText,
        searchedColumn,
        setSearchedColumn
      ),
    },
    {
      dataIndex: "user_id",
      key: "user_id",
      render: user_id => <Link to={`/user/${user_id}`}>Xem</Link>,
    },
  ];

  return <Table rowKey="user_id" dataSource={mockUser} columns={columns} />;
};

export default User;
